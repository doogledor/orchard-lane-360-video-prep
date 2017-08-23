const DashUpload = require('youtube-video-uploader')

const spawn = require('child_process').spawnSync

const PLAYLIST = "https://www.youtube.com/playlist\?list\=PLZRcgvIPIUuWH9WxuUqV2QEs5S-C63vzx"

const child = spawn(`youtube-dl`, [
  PLAYLIST,
  "--flat-playlist",
  "-J"
])

const stderr = child.stderr.toString('utf-8');
const stdout = JSON.parse(child.stdout.toString('utf-8'));
console.log(stdout.entries);
const IDS =  stdout.entries.map(e=>e.url)
DashUpload(IDS,"gs://orchard-lane", {save:__dirname})
