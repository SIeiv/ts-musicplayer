import {createSlice} from "@reduxjs/toolkit";
import {AuthorType, NewTrackType, TrackType} from "../types/type.ts";

const DOMAIN = 'http://f1003580.xsph.ru/';

const initialState = {
    mainData: [
        {
            name: "Powerwolf", avatar: "", albums: [
                {
                    name: "Blessed & Possessed", id: 1, cover: "", tracks: [
                        {name: "Army of the Night", id: 111, url: "", cover: ""}
                    ]
                },
                {
                    name: "AI Music", id: 2, tracks: [
                        {
                            name: "Владимир Путин Молодец!",
                            id: 121,
                            url: DOMAIN + "Powerwolf - Владимир Путин Молодец! (AI Music, Udio AI Cover).mp3",
                            cover: DOMAIN + "Powerwolf - Владимир Путин Молодец! (AI Music, Udio AI Cover)_maxresdefault.jpg"
                        }
                    ]
                },
            ]
        },
        {
            name: "Серёга Пират", avatar: DOMAIN + "serega-pirat/avatar.jpg", albums: [
                {
                    name: "Гимн Дахака", id: 3, cover: DOMAIN + "serega-pirat/albums/gimn-daxaka/cover.jpg", year: "2020",
                    isSingle: true, tracks: [
                        {
                            name: "Гимн Дахака", id: 1,
                            url: DOMAIN + "serega-pirat/albums/gimn-daxaka/tracks/Гимн%20Дахака.mp3",
                            cover: DOMAIN + "serega-pirat/albums/gimn-daxaka/tracks/cover.jpg"
                        }
                    ]
                },
                {
                    name: "Невошедшее", id: 4, cover: DOMAIN + "serega-pirat/avatar.jpg", year: "2024",
                    isSingle: false, tracks: [
                        {
                            name: "Гимн", id: 2,
                            url: DOMAIN + "Серёга Пират - Гимн (оригинал...).mp3",
                            cover: DOMAIN + "serega-pirat/avatar.jpg"
                        },
                        {
                            name: "на ласт пик берёшь саппорта", id: 3,
                            url: DOMAIN + "lastpick.mp3",
                            cover: DOMAIN + "serega-pirat/avatar.jpg"
                        },
                        {
                            name: "я не пойду с тобой гулять", id: 4,
                            url: DOMAIN + "Серега Пират - я не пойду с тобой гулять.mp3",
                            cover: DOMAIN + "serega-pirat/avatar.jpg"
                        },
                        {
                            name: "Мой сларк", id: 5,
                            url: DOMAIN + "Пират - мой сларк.mp3",
                            cover: DOMAIN + "serega-pirat/avatar.jpg"
                        },
                        {
                            name: "шизоид", id: 6,
                            url: DOMAIN + "Серега Пират - шизоид.mp3",
                            cover: DOMAIN + "serega-pirat/avatar.jpg"
                        },
                        {
                            name: "что?", id: 7,
                            url: DOMAIN + "Пират - что？.mp3",
                            cover: DOMAIN + "serega-pirat/avatar.jpg"
                        },
                        {
                            name: "Тильт", id: 8,
                            url: DOMAIN + "СЕРЕГА ПИРАТ - ТИЛЬТ.mp3",
                            cover: DOMAIN + "serega-pirat/avatar.jpg"
                        },
                        {
                            name: "новогодняя", id: 9,
                            url: DOMAIN + "Серега пират - новогодняя.mp3",
                            cover: DOMAIN + "serega-pirat/avatar.jpg"
                        },
                    ]
                },
            ]
        },
        {
            name: "Даня Кашамалашова", avatar: DOMAIN + "cringe/photo_2024-09-24_14-00-38.jpg", albums: [
                {
                    name: "Zalupa", id: 31, cover: DOMAIN + "cringe/photo_2024-09-24_14-00-38.jpg", tracks: [
                        {
                            name: "Артхаус",
                            id: 311,
                            url: DOMAIN + "cringe/IMG_0247.mp3",
                            cover: DOMAIN + "cringe/photo_2024-09-24_14-00-38.jpg"
                        }
                    ]
                },
            ]
        },
    ] as Array<AuthorType>,

    audioState: {
        source: new Audio(),
        isPlaying: false,
        isMyVibePlaying: false,
        isRepeating: 0,
        isRandom: false,
        currentQueue: [] as Array<any>,
        placeInQueue: 0,
        currentTrack: {
            name: null,
            id: null,
            url: null,
            author: "-",
            album: "-",
            cover: null,
            isFavorite: null
        } as NewTrackType
    },

    favoritePlaylist: [] as Array<NewTrackType>,
    favoriteAuthors: [] as Array<AuthorType>
}


//initialize
initialState.audioState.source.volume = 0.2;

let authorIdController = 1;
let albumIdController = 1;
let trackIdController = 1;
initialState.mainData.forEach(author => {
    author.id = authorIdController++;
    author.albums.forEach(album => {
        album.id = albumIdController++;
        album.tracks.forEach(track => {
            track.id = trackIdController++;
            track.author = author.name;
            track.album = album.name;
        })
    })
})

const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        audioPlay({audioState}, {payload: {src, track, queue, author}}) {
            audioState.isPlaying = false;
            audioState.source.src = src;
            audioState.currentTrack = track;
            audioState.currentQueue = queue;

            audioState.currentQueue.forEach(t => {
                if (t.id === track.id) {
                    audioState.placeInQueue = audioState.currentQueue.indexOf(t);
                }
            })

            audioState.source.play();
            audioState.isPlaying = true;
        },
        audioPause({audioState}) {
            audioState.source.pause();
            audioState.isPlaying = false;
        },
        audioResume({audioState}) {
            audioState.source.play();
            audioState.isPlaying = true;
        },
        //refactor etot yzhas syka
        audioPlayNext({audioState}) {
            if (audioState.isRandom === true) {
                audioState.placeInQueue = Math.floor(Math.random() * audioState.currentQueue.length);
                audioState.currentTrack = audioState.currentQueue[audioState.placeInQueue];
                audioState.source.src = audioState.currentQueue[audioState.placeInQueue].url;
                audioState.source.play();
                audioState.isPlaying = true;
            } else if (audioState.isRepeating === 0) {
                if (audioState.currentQueue.length - 1 > audioState.placeInQueue) {
                    audioState.placeInQueue++;
                    audioState.currentTrack = audioState.currentQueue[audioState.placeInQueue];
                    audioState.source.src = audioState.currentQueue[audioState.placeInQueue].url;
                    audioState.source.play();
                    audioState.isPlaying = true;
                } else {
                    audioState.isPlaying = false;
                }
            } else if (audioState.isRepeating === 1) {
                if (audioState.currentQueue.length - 1 === audioState.placeInQueue) {
                    audioState.placeInQueue = 0;
                } else if (audioState.currentQueue.length - 1 > audioState.placeInQueue) {
                    audioState.placeInQueue++;
                }
                audioState.currentTrack = audioState.currentQueue[audioState.placeInQueue];
                audioState.source.src = audioState.currentQueue[audioState.placeInQueue].url;
                audioState.source.play();
                audioState.isPlaying = true;
            } else if (audioState.isRepeating === 2) {
                audioState.currentTrack = audioState.currentQueue[audioState.placeInQueue];
                audioState.source.src = audioState.currentQueue[audioState.placeInQueue].url;
                audioState.source.play();
                audioState.isPlaying = true;
            }


        },
        audioPlayPrev({audioState}) {
            if (0 < audioState.placeInQueue) {
                audioState.placeInQueue--;
            }
            audioState.currentTrack = audioState.currentQueue[audioState.placeInQueue];
            audioState.source.src = audioState.currentQueue[audioState.placeInQueue].url;
            audioState.source.play();
            audioState.isPlaying = true;
        },

        audioSwitchIsRepeating({audioState}) {
            if (audioState.isRepeating === 0) {
                audioState.isRepeating = 1
            } else if (audioState.isRepeating === 1) {
                audioState.isRepeating = 2
            } else if (audioState.isRepeating === 2) {
                audioState.isRepeating = 0
            }
        },
        audioSwitchIsRandom({audioState}) {
            audioState.isRandom = !audioState.isRandom;
        },

        myVibePlay({audioState, allTracks}) {
            audioState.currentQueue = allTracks;
            audioState.placeInQueue = Math.floor(Math.random() * audioState.currentQueue.length);
            audioState.currentTrack = audioState.currentQueue[audioState.placeInQueue];
            audioState.source.src = audioState.currentQueue[audioState.placeInQueue].url;
            audioState.source.play();
            audioState.isMyVibePlaying = true;
        },

        myVibeNext({audioState}) {
            audioState.placeInQueue = Math.floor(Math.random() * audioState.currentQueue.length);
            audioState.currentTrack = audioState.currentQueue[audioState.placeInQueue];
            audioState.source.src = audioState.currentQueue[audioState.placeInQueue].url;
            audioState.source.play();
            audioState.isMyVibePlaying = true;
        },

        myVibePause({audioState}) {
            audioState.source.pause();
            audioState.isMyVibePlaying = false;
        },
        myVibeResume({audioState}) {
            audioState.source.play();
            audioState.isMyVibePlaying = true;
        },

        onScrollChange({audioState}, action) {
            audioState.source.currentTime = action.payload;
        },
        changeAudioVolume({audioState}, action) {
            audioState.source.volume = action.payload;
        },

        addTrackToFavoritePlaylist(state, {payload:{trackId, authorName}}) {

            state.mainData.forEach(author => {
                author.albums.forEach(album => {
                    album.tracks.forEach(t => {
                        if (t.id === trackId) {
                            t.isFavorite = true;
                            t.author = authorName;
                            state.favoritePlaylist = [t, ...state.favoritePlaylist]
                        }
                        if (state.audioState.currentTrack.id === trackId) {
                            state.audioState.currentTrack.isFavorite = true;
                            state.audioState.currentTrack.author = authorName;
                        }
                    })
                })
            })
        },
        removeTrackFromFavoritePlaylist(state, action) {
            state.favoritePlaylist.forEach((t, index) => {
                if (t.id === action.payload) {
                    state.favoritePlaylist.splice(index, 1);
                }
            });

            state.mainData.forEach(author => {
                author.albums.forEach(album => {
                    album.tracks.forEach(t => {
                        if (t.id === action.payload) {
                            t.isFavorite = false;
                        }
                        if (state.audioState.currentTrack.id === action.payload) {
                            state.audioState.currentTrack.isFavorite = false;
                        }
                    })
                })
            })
        },

        addAuthorToFavorites(state, action) {
            state.mainData.forEach(author => {
                if (author.id === action.payload) {
                    author.isFavorite = true;
                    state.favoriteAuthors = [author, ...state.favoriteAuthors]
                }
            })
        }
    }
});

export const {
    audioPlay, audioPause,
    audioResume, onScrollChange,
    changeAudioVolume, audioPlayNext,
    audioPlayPrev, audioSwitchIsRepeating,
    audioSwitchIsRandom, myVibePlay, myVibeNext,
    addTrackToFavoritePlaylist, removeTrackFromFavoritePlaylist, addAuthorToFavorites,
} = mainSlice.actions;
export default mainSlice.reducer;

