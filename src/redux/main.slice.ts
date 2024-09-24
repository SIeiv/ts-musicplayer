import {createSlice} from "@reduxjs/toolkit";
import {AuthorType, NewTrackType, TrackType} from "../types/type.ts";
import {getAllTracks} from "../helpers/helpers.ts";

const DOMAIN = 'http://f1003580.xsph.ru/';

const initialState = {
    mainData: [
        {
            name: "Powerwolf", id: 1, avatar: "", albums: [
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
            name: "Серёга Пират", id: 2, avatar: DOMAIN + "serega-pirat/avatar.jpg", albums: [
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
            name: "Даня Кашамалашова", id: 3, avatar: DOMAIN + "cringe/photo_2024-09-24_14-00-38.jpg", albums: [
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


    allTracks: [
        {
            url: DOMAIN + "Powerwolf - Владимир Путин Молодец! (AI Music, Udio AI Cover).mp3",
            image: DOMAIN + "Powerwolf - Владимир Путин Молодец! (AI Music, Udio AI Cover)_maxresdefault.jpg",
            author: "Powerwolf",
            name: "Владимир Путин Молодец!",
            id: 1
        },
        {
            "url": DOMAIN + "Powerwolf - Говновоз (AI).mp3",
            "image": DOMAIN + "govnovoz.webp",
            "author": "Powerwolf",
            "name": "Говновоз",
            id: 2
        },
        {
            "url": DOMAIN + "Вот и помер дед Максим, но исполнитель POWERWOLF (AI COVER).mp3",
            "image": DOMAIN + "вот и помер дед максим.jpg",
            "author": "Powerwolf",
            "name": "Вот и помер дед Максим",
            id: 3
        },
        {
            "url": DOMAIN + "Powerwolf - Убили негра (AI Music, Udio AI Cover Запрещенные барабанщи.mp3",
            "image": DOMAIN + "Powerwolf - Убили негра (AI Music, Udio AI Cover Запрещенные барабанщики)_maxresdefault.jpg",
            "author": "Powerwolf",
            "name": "Убили негра",
            id: 4
        },
        {
            "url": DOMAIN + "Частушки, но это Powerwolf (AI cover).mp3",
            "image": DOMAIN + "Частушки, но это Powerwolf (AI cover)_maxresdefault.jpg",
            "author": "Powerwolf",
            "name": "Частушки",
            id: 5
        },
        {
            "url": DOMAIN + "Электрослабость - Терентий, но это Powerwolf (AI COVER).mp3",
            "image": DOMAIN + "Электрослабость - Терентий, но это Powerwolf (AI COVER)_maxresdefault.jpg",
            "author": "Powerwolf",
            "name": "Терентий",
            id: 6
        },
        {
            "url": DOMAIN + "Powerwolf - Священная война (Ai Cover).mp3",
            "image": DOMAIN + "Powerwolf - Священная война (Ai Cover)_maxresdefault.jpg",
            "author": "Powerwolf",
            "name": "Священная война",
            id: 7
        },
        {
            "url": DOMAIN + "Серега пират - тп на аме.mp3",
            "image": DOMAIN + "Серега пират - тп на аме_maxresdefault.jpg",
            "author": "Серёга пират",
            "name": "тп на аме",
            id: 8
        },
        {
            "url": DOMAIN + "Серега пират - ну и что, что я вор？.mp3",
            "image": DOMAIN + "Серега пират - ну и что, что я вор__maxresdefault.jpg",
            "author": "Серёга пират",
            "name": "ну и что, что я вор?",
            id: 9
        },
        {
            "url": DOMAIN + "Почему ты еще не фанат？.mp3",
            "image": DOMAIN + "Почему ты еще не фанат__maxresdefault.jpg",
            "author": "Серёга пират",
            "name": "Почему ты ещё не фанат?",
            id: 10
        },
        {
            "url": DOMAIN + "Серега пират - вайбмен.mp3",
            "image": DOMAIN + "Серега пират - вайбмен_maxresdefault.jpg",
            "author": "Серёга пират",
            "name": "Вайбмен",
            id: 11
        },
        {
            "url": DOMAIN + "серега пират - я взлетаю вверх (prod. LIVING PUFF).mp3",
            "image": DOMAIN + "серега пират - я взлетаю вверх (prod. LIVING PUFF)_maxresdefault.jpg",
            "author": "Серёга пират",
            "name": "Я взлетаю вверх",
            id: 12
        },
        {
            "url": DOMAIN + "Серега пират - извини сегодня праздник.mp3",
            "image": DOMAIN + "извини сегодня праздник.webp",
            "author": "Серёга пират",
            "name": "извини сегодня праздник",
            id: 13
        },
        {
            "url": DOMAIN + "Серёга Пират - Гимн (оригинал...).mp3",
            "image": DOMAIN + "серёга пират - гимн_maxresdefault.jpg",
            "author": "Серёга пират",
            "name": "Гимн",
            id: 14
        },
        {
            "url": DOMAIN + "Гимн Дахака.mp3",
            "image": DOMAIN + "Гимн Дахака_maxresdefault.jpg",
            "author": "Серёга пират",
            "name": "Гимн Дахака",
            id: 15
        },
        {
            "url": DOMAIN + "lastpick.mp3",
            "image": DOMAIN + "серёга пират - на ласт пик берёшь саппорта_maxresdefault.jpg",
            "author": "Серёга пират",
            "name": "на ласт пик берёшь саппорта",
            id: 16
        },
        {
            "url": DOMAIN + "Серега Пират - я не пойду с тобой гулять.mp3",
            "image": DOMAIN + "Серега Пират - я не пойду с тобой гулять_maxresdefault.jpg",
            "author": "Серёга пират",
            "name": "я не пойду с тобой гулять",
            id: 17
        },
        {
            "url": DOMAIN + "Пират - мой сларк.mp3",
            "image": DOMAIN + "Пират - мой сларк_maxresdefault.jpg",
            "author": "Серёга пират",
            "name": "Мой сларк",
            id: 18
        },
        {
            "url": DOMAIN + "Серега Пират - шизоид.mp3",
            "image": DOMAIN + "Серега Пират - шизоид_maxresdefault.jpg",
            "author": "Серёга пират",
            "name": "шизоид",
            id: 19
        },
        {
            "url": DOMAIN + "Пират - что？.mp3",
            "image": DOMAIN + "Пират - что__maxresdefault.jpg",
            "author": "Серёга пират",
            "name": "что?",
            id: 20
        },
        {
            "url": DOMAIN + "СЕРЕГА ПИРАТ - ТИЛЬТ.mp3",
            "image": DOMAIN + "СЕРЕГА ПИРАТ - ТИЛЬТ_maxresdefault.jpg",
            "author": "Серёга пират",
            "name": "Тильт",
            id: 21
        },
        {
            "url": DOMAIN + "Серега пират - новогодняя.mp3",
            "image": DOMAIN + "Серега пират - новогодняя_maxresdefault.jpg",
            "author": "Серёга пират",
            "name": "новогодняя",
            id: 22
        },
        {
            "url": DOMAIN + "серёга пират - команда виновата.mp3",
            "image": DOMAIN + "серёга пират - команда виновата_maxresdefault.jpg",
            "author": "Серёга пират",
            "name": "команда виновата",
            id: 23
        },
        {
            "url": DOMAIN + "Серега пират - Маша.mp3",
            "image": DOMAIN + "Серега пират - Маша_maxresdefault.jpg",
            "author": "Серёга пират",
            "name": "Маша",
            id: 24
        },
        {
            "url": DOMAIN + "Серега пират - на луне.mp3",
            "image": DOMAIN + "Серега пират - на луне_maxresdefault.jpg",
            "author": "Серёга пират",
            "name": "на луне",
            id: 25
        },
        {
            "url": DOMAIN + "Серега пират - В этой траве.mp3",
            "image": DOMAIN + "Серега пират - В этой траве_maxresdefault.jpg",
            "author": "Серёга пират",
            "name": "В этой траве",
            id: 26
        },
        {
            "url": DOMAIN + "я поднимаю свою голову вверх.mp3",
            "image": DOMAIN + "я поднимаю свою голову вверх_maxresdefault.jpg",
            "author": "Серёга пират",
            "name": "я поднимаю свою голову вверх",
            id: 27
        },
        {
            "url": DOMAIN + "Серега Пират - я это я (prod. Bad Kid).mp3",
            "image": DOMAIN + "Серега Пират - я это я (prod. Bad Kid)_maxresdefault.jpg",
            "author": "Серёга пират",
            "name": "я это я",
            id: 28
        },
        {
            "url": DOMAIN + "Powerwolf - Шалава (AI Music, Udio AI Cover Фактор 2).mp3",
            "image": DOMAIN + "Powerwolf - Шалава (AI Music, Udio AI Cover Фактор 2)_maxresdefault.jpg",
            "author": "Powerwolf",
            "name": "Шалава",
            id: 29
        },
        {
            "url": DOMAIN + "quiizzzmeow, Серега Пират - травоман (слив трека 2020).mp3",
            "image": DOMAIN + "quiizzzmeow, Серега Пират - травоман (слив трека 2020)_maxresdefault.jpg",
            "author": "Серёга пират",
            "name": "травоман",
            id: 30
        },
        {
            "url": DOMAIN + "Серега пират, qeqoqeq - зомби апокалипсис (ILIXX BEATS prod).mp3",
            "image": DOMAIN + "Серега пират, qeqoqeq - зомби апокалипсис (ILIXX BEATS prod)_maxresdefault.jpg",
            "author": "Серёга пират",
            "name": "зомби апокалипсис",
            id: 31
        },
        {
            "url": DOMAIN + "Серега пират, LLIIEEDD - я сворую бабки (prod. fantom).mp3",
            "image": DOMAIN + "Серега пират, LLIIEEDD - я сворую бабки (prod. fantom)_maxresdefault.jpg",
            "author": "Серёга пират",
            "name": "я сворую бабки",
            id: 32
        },
        {
            "url": DOMAIN + "Серёга пират - солевар.mp3",
            "image": DOMAIN + "Серёга пират - солевар_maxresdefault.jpg",
            "author": "Серёга пират",
            "name": "солевар",
            id: 33
        },
        {
            "url": DOMAIN + "ЧСВ.mp3",
            "image": DOMAIN + "ЧСВ_maxresdefault.jpg",
            "author": "Серёга пират",
            "name": "ЧСВ",
            id: 34
        },
        {
            "url": DOMAIN + "Серега пират - минёр.mp3",
            "image": DOMAIN + "минер.webp",
            "author": "Серёга пират",
            "name": "минёр",
            id: 35
        },
        {
            "url": DOMAIN + 'СЕРЕГА ПИРАТ - МОЙ ТОПОР (ОФИЦИАЛЬНЫЙ КЛИП).mp3',
            "image": DOMAIN + "СЕРЕГА ПИРАТ - МОЙ ТОПОР (ОФИЦИАЛЬНЫЙ КЛИП)_maxresdefault.jpg",
            "author": "Серёга пират",
            "name": "МОЙ ТОПОР",
            id: 36
        },
    ] as Array<TrackType>,

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
            cover: null,
            author: null,
            isFavorite: null
        } as NewTrackType
    },

    favoritePlaylist: [] as Array<NewTrackType>
}

initialState.audioState.source.volume = 0.2;

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
    }
});

export const {
    audioPlay, audioPause,
    audioResume, onScrollChange,
    changeAudioVolume, audioPlayNext,
    audioPlayPrev, audioSwitchIsRepeating,
    audioSwitchIsRandom, myVibePlay, myVibeNext,
    addTrackToFavoritePlaylist, removeTrackFromFavoritePlaylist,
} = mainSlice.actions;
export default mainSlice.reducer;

