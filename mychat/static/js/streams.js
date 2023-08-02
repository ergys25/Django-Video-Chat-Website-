const APP_ID = '8599e65a8a8e4016901d90ef7b289421'
const  CHANNEL = 'main'
const TOKEN = '007eJxTYFD9vta4hyvtZuCT4t7P5gcPcxy4l9XeF5yx4eTT6ozJr3QUGCxMLS1TzUwTLRItUk0MDM0sDQxTLA1S08yTjCwsTYwMVwSfSmkIZGQ4vY+VgREKQXwWhtzEzDwGBgDIpiDd'
let UID;

const client = AgoraRTC.createClient({mode:'rtc', codec:'vp8'})

let localTracks = []
let remoteUsers = {}


let joinAndDisplayLocalStream = async() => {
   UID = await client.join(APP_ID, CHANNEL, TOKEN, null)

    localTracks = await AgoraRTC.createMicrophoneAndCameraTracks()

    let player = `<div class="video-container" id="user-container-${UID}">
    <div class="username-wrapper"><span class="user-name">My Name</span></div>
    <div class="video-player" id="user-${UID}"></div>
</div>`
    document.getElementById('video-streams').insertAdjacentHTML('beforeend', player)
    localTracks[1].play(`user-${UID}`)

    await client.publish([localTracks[0], localTracks[1]])
}

joinAndDisplayLocalStream()