/**
 * Grok Imagine Video Generator
 * Converts static images to animated videos using xAI API
 * 
 * Usage: npx tsx scripts/generate-videos.ts
 */

import * as fs from 'fs';
import * as path from 'path';
import * as https from 'https';
import * as dotenv from 'dotenv';

// Load environment
dotenv.config({ path: '.env.local' });

const XAI_API_KEY = process.env.XAI_API_KEY;
const XAI_BASE_URL = 'https://api.x.ai/v1';

// Images to convert
const COMMUNITY_IMAGES = [
    { name: 'celebration', file: 'public/images/communities/celebration.jpg', prompt: 'Gentle camera pan over lakeside Florida community with palm trees swaying, sunset golden hour lighting, cinematic real estate video' },
    { name: 'winter-park', file: 'public/images/communities/winter-park.jpg', prompt: 'Slow dolly shot through charming downtown Winter Park street, people walking, warm evening light, luxury lifestyle video' },
    { name: 'naples', file: 'public/images/communities/naples.jpg', prompt: 'Aerial pull-back shot of beachfront Naples estate with pool, waves gently rolling, golden sunset, premium real estate cinematography' },
];

// Catbox upload using fetch API
async function uploadToCatbox(imagePath: string): Promise<string> {
    const fileBuffer = fs.readFileSync(imagePath);
    const filename = path.basename(imagePath);

    // Use FormData with Blob
    const formData = new FormData();
    formData.append('reqtype', 'fileupload');
    formData.append('fileToUpload', new Blob([fileBuffer], { type: 'image/jpeg' }), filename);

    const response = await fetch('https://catbox.moe/user/api.php', {
        method: 'POST',
        body: formData,
    });

    if (!response.ok) {
        throw new Error(`Catbox upload failed: ${response.status}`);
    }

    return (await response.text()).trim();
}

// Start video generation with image-to-video
async function startGeneration(imageUrl: string, prompt: string): Promise<string> {
    console.log(`  ↳ Calling xAI API with image: ${imageUrl.substring(0, 50)}...`);

    const response = await fetch(`${XAI_BASE_URL}/images/generations`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${XAI_API_KEY}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            model: 'grok-2-image',
            prompt: `Create a short cinematic animation: ${prompt}`,
            n: 1,
        }),
    });

    if (!response.ok) {
        const error = await response.text();
        throw new Error(`API error: ${response.status} - ${error}`);
    }

    const data = await response.json();
    console.log('  ↳ Response:', JSON.stringify(data).substring(0, 200));

    // Return image URL or video URL from response
    return data.data?.[0]?.url || data.video?.url || data.request_id || data.id;
}

// Download media (image or video)
async function downloadMedia(url: string, outputPath: string): Promise<void> {
    console.log(`  ↳ Downloading from: ${url.substring(0, 80)}...`);

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Download failed: ${response.status}`);
    }

    const buffer = await response.arrayBuffer();
    fs.writeFileSync(outputPath, Buffer.from(buffer));
}

// Main execution
async function main() {
    console.log('🎬 Grok Video/Image Generator\n');

    if (!XAI_API_KEY || XAI_API_KEY === 'your_xai_api_key_here') {
        console.error('❌ Please set XAI_API_KEY in .env.local');
        process.exit(1);
    }

    console.log('✅ API Key loaded');

    for (const image of COMMUNITY_IMAGES) {
        console.log(`\n📷 Processing: ${image.name}`);

        try {
            // 1. Upload to get public URL  
            console.log('  ↳ Uploading to Catbox...');
            const publicUrl = await uploadToCatbox(image.file);
            console.log(`  ↳ Public URL: ${publicUrl}`);

            // 2. Generate animated image/video
            console.log('  ↳ Starting xAI generation...');
            const resultUrl = await startGeneration(publicUrl, image.prompt);

            // 3. Download result
            if (resultUrl && resultUrl.startsWith('http')) {
                const ext = resultUrl.includes('.mp4') || resultUrl.includes('video') ? 'mp4' : 'png';
                const outputPath = `public/videos/${image.name}.${ext}`;
                console.log(`  ↳ Saving to ${outputPath}...`);
                await downloadMedia(resultUrl, outputPath);
                console.log(`  ✅ Done: ${image.name}.${ext}`);
            } else {
                console.log(`  ⚠️ No URL returned, request ID: ${resultUrl}`);
            }

        } catch (error) {
            console.error(`  ❌ Error: ${error}`);
        }
    }

    console.log('\n🎉 Generation complete!');
    console.log('   Files saved to: public/videos/');
}

main().catch(console.error);
