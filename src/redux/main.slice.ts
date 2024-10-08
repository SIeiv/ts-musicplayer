import {createSlice} from "@reduxjs/toolkit";
import {AlbumType, AuthorType, NewTrackType, PinType} from "../types/type.ts";

const DOMAIN = 'http://f1003580.xsph.ru/';

const initialState = {
    mainData: [
        {
            name: "Powerwolf", avatar: DOMAIN + "powerwolf/avatar.jpg", albums: [
                {
                    name: "Wake Up the Wicked", cover: DOMAIN + "powerwolf/wake-up-the-wicked/cover.jpg", year: "2024", tracks: [
                        {name: "Bless 'em With the Blade", url: DOMAIN + "powerwolf/wake-up-the-wicked/spotifydown.com - Bless 'em With the Blade.mp3"},
                        {name: "Sinners of the Seven Seas", url: DOMAIN + "powerwolf/wake-up-the-wicked/spotifydown.com - Sinners of the Seven Seas.mp3"},
                        {name: "Kyrie Klitorem", url: DOMAIN + "powerwolf/wake-up-the-wicked/spotifydown.com - Kyrie Klitorem.mp3"},
                        {name: "Heretic Hunters", url: DOMAIN + "powerwolf/wake-up-the-wicked/spotifydown.com - Heretic Hunters.mp3"},
                        {name: "1589", url: DOMAIN + "powerwolf/wake-up-the-wicked/spotifydown.com - 1589.mp3"},
                        {name: "Viva Vulgata", url: DOMAIN + "powerwolf/wake-up-the-wicked/spotifydown.com - Viva Vulgata.mp3"},
                        {name: "Wake Up the Wicked", url: DOMAIN + "powerwolf/wake-up-the-wicked/spotifydown.com - Wake Up the Wicked.mp3"},
                        {name: "Joan of Arc", url: DOMAIN + "powerwolf/wake-up-the-wicked/spotifydown.com - Joan of Arc.mp3"},
                        {name: "Thunderpriest", url: DOMAIN + "powerwolf/wake-up-the-wicked/spotifydown.com - Thunderpriest.mp3"},
                        {name: "We Don't Wanna Be No Saints", url: DOMAIN + "powerwolf/wake-up-the-wicked/spotifydown.com - We Don't Wanna Be No Saints.mp3"},
                        {name: "Vargamor", url: DOMAIN + "powerwolf/wake-up-the-wicked/spotifydown.com - Vargamor.mp3"},
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
                        {name: "травоман", url: DOMAIN + "quiizzzmeow, Серега Пират - травоман (слив трека 2020).mp3"},
                        {name: "минёр", url: DOMAIN + "Серега пират - минёр.mp3"},
                        {name: "солевар", url: DOMAIN + "Серёга пират - солевар.mp3"},
                        {name: "команда виновата", url: DOMAIN + "серёга пират - команда виновата.mp3"},
                    ]
                },
                {
                    name: "Почему ты ещё не фанат", cover: DOMAIN + "/ab67616d0000b273f629e1b41d71095d70ec9e1c.jpg", year: "2021",
                    isSingle: true, tracks: [
                       {name: "Почему ты ещё не фанат", url: DOMAIN + "/Почему ты еще не фанат？.mp3"}
                    ]
                },
                {
                    name: "Мой топор", cover: DOMAIN + "/ab67616d0000b27390d227750619710fa3fb7241.jpg", year: "2022",
                    isSingle: true, tracks: [
                       {name: "Мой топор", url: DOMAIN + "/СЕРЕГА ПИРАТ - МОЙ ТОПОР (ОФИЦИАЛЬНЫЙ КЛИП).mp3"}
                    ]
                },
                {
                    name: "Я это я", cover: DOMAIN + "/ab67616d0000b273c9108adc2b2aca06128af296.jpg", year: "2021",
                    isSingle: true, tracks: [
                        {name: "Я это я", url: DOMAIN + "/Серега Пират - я это я (prod. Bad Kid).mp3"}
                    ]
                },
                {
                    name: "В этой траве", cover: DOMAIN + "/ab67616d0000b273d8b8ac081653ac8fc3009026.jpg", year: "2024",
                    isSingle: true, tracks: [
                        {name: "В этой траве", url: DOMAIN + "/Серега пират - В этой траве.mp3"}
                    ]
                },
                {
                    name: "Маша", cover: DOMAIN + "/ab67616d0000b2737c237aaefc4b4e023c974a84.jpg", year: "2021",
                    isSingle: true, tracks: [
                        {name: "Маша", url: DOMAIN + "/Серега пират - Маша.mp3"}
                    ]
                },
                {
                    name: "Извини, сегодня праздник", cover: DOMAIN + "/ab67616d0000b273fa262865466382604c11e98a.jpg", year: "2021",
                    isSingle: true, tracks: [
                        {name: "Извини, сегодня праздник", url: DOMAIN + "/Серега пират - извини сегодня праздник.mp3"}
                    ]
                },
                {
                    name: "На луне", cover: DOMAIN + "/ab67616d0000b2739bb8b3520d73d957a29c29a4.jpg", year: "2021",
                    isSingle: true, tracks: [
                        {name: "На луне", url: DOMAIN + "/Серега пират - на луне.mp3"}
                    ]
                },
                {
                    name: "Ну и что, что я вор", cover: DOMAIN + "/ab67616d0000b273feafa1c332efb39a2419612b.jpg", year: "2022",
                    isSingle: true, tracks: [
                        {name: "Ну и что, что я вор", url: DOMAIN + "/Серега пират - ну и что, что я вор？.mp3"}
                    ]
                },
                {
                    name: "Тп на аме", cover: DOMAIN + "/ab67616d0000b273d9f3873cb80e53da97f245b3.jpg", year: "2022",
                    isSingle: true, tracks: [
                        {name: "Тп на аме", url: DOMAIN + "/Серега пират - тп на аме.mp3"}
                    ]
                },
                {
                    name: "Я сворую бабки", cover: DOMAIN + "/ab67616d0000b273d30a6b3dc97ed56ee9f4391f.jpg", year: "2021",
                    isSingle: true, tracks: [
                        {name: "Я сворую бабки", url: DOMAIN + "/Серега пират, LLIIEEDD - я сворую бабки (prod. fantom).mp3"}
                    ]
                },
                {
                    name: "зомби апокалипсис", cover: DOMAIN + "/ab67616d0000b273ea218306bb381f5d35bcdc5a.jpg", year: "2023",
                    isSingle: true, tracks: [
                        {name: "зомби апокалипсис", url: DOMAIN + "/Серега пират, qeqoqeq - зомби апокалипсис (ILIXX BEATS prod).mp3"}
                    ]
                },
                {
                    name: "ЧСВ", cover: DOMAIN + "/ab67616d0000b273f3e8f227633822e9d730c4ca.jpg", year: "2024",
                    isSingle: true, tracks: [
                        {name: "ЧСВ", url: DOMAIN + "/ЧСВ.mp3"}
                    ]
                },
                {
                    name: "Я поднимаю свою голову вверх", cover: DOMAIN + "/\tab67616d0000b27321940b628fe6a5d4677922a5.jpg", year: "2023",
                    isSingle: true, tracks: [
                        {name: "Я поднимаю свою голову вверх", url: DOMAIN + "/я поднимаю свою голову вверх.mp3"}
                    ]
                },
            ]
        },
        {
            name: "C418", avatar: DOMAIN + "c418/avatar.jpg", albums: [
                {
                    name: "Minecraft - Volume Alpha", cover: DOMAIN + "c418/volume-alpha/cover.jpg", year: 2011,
                    tracks: [
                        {
                            name: "Key", url: DOMAIN + "c418/volume-alpha/spotifydown.com - Key.mp3"
                        },
                        {
                            name: "Door", url: DOMAIN + "c418/volume-alpha/spotifydown.com - Door.mp3"
                        },
                        {
                            name: "Subwoofer Lullaby", url: DOMAIN + "c418/volume-alpha/spotifydown.com - Subwoofer Lullaby.mp3"
                        },
                        {
                            name: "Death", url: DOMAIN + "c418/volume-alpha/spotifydown.com - Death.mp3"
                        },
                        {
                            name: "Living Mice", url: DOMAIN + "c418/volume-alpha/spotifydown.com - Living Mice.mp3"
                        },
                        {
                            name: "Moog City", url: DOMAIN + "c418/volume-alpha/spotifydown.com - Moog City.mp3"
                        },
                        {
                            name: "Haggstrom", url: DOMAIN + "c418/volume-alpha/spotifydown.com - Haggstrom.mp3"
                        },
                        {
                            name: "Minecraft", url: DOMAIN + "c418/volume-alpha/spotifydown.com - Minecraft.mp3"
                        },
                        {
                            name: "Oxygène", url: DOMAIN + "c418/volume-alpha/spotifydown.com - Oxygène.mp3"
                        },
                        {
                            name: "Equinoxe", url: DOMAIN + "c418/volume-alpha/spotifydown.com - Equinoxe.mp3"
                        },
                        {
                            name: "Mice On Venus", url: DOMAIN + "c418/volume-alpha/spotifydown.com - Mice On Venus.mp3"
                        },
                        {
                            name: "Dry Hands", url: DOMAIN + "c418/volume-alpha/spotifydown.com - Dry Hands.mp3"
                        },
                        {
                            name: "Wet Hands", url: DOMAIN + "c418/volume-alpha/spotifydown.com - Wet Hands.mp3"
                        },
                        {
                            name: "Clark", url: DOMAIN + "c418/volume-alpha/spotifydown.com - Clark.mp3"
                        },
                        {
                            name: "Chris", url: DOMAIN + "c418/volume-alpha/spotifydown.com - Chris.mp3"
                        },
                        {
                            name: "Thirteen", url: DOMAIN + "c418/volume-alpha/spotifydown.com - Thirteen.mp3"
                        },
                        {
                            name: "Excuse", url: DOMAIN + "c418/volume-alpha/spotifydown.com - Excuse.mp3"
                        },
                        {
                            name: "Sweden", url: DOMAIN + "c418/volume-alpha/spotifydown.com - Sweden.mp3"
                        },
                        {
                            name: "Cat", url: DOMAIN + "c418/volume-alpha/spotifydown.com - Cat.mp3"
                        },
                        {
                            name: "Dog", url: DOMAIN + "c418/volume-alpha/spotifydown.com - Dog.mp3"
                        },
                        {
                            name: "Danny", url: DOMAIN + "c418/volume-alpha/spotifydown.com - Danny.mp3"
                        },
                        {
                            name: "Beginning", url: DOMAIN + "c418/volume-alpha/spotifydown.com - Beginning.mp3"
                        },
                        {
                            name: "Droopy Likes Ricochet", url: DOMAIN + "c418/volume-alpha/spotifydown.com - Droopy Likes Ricochet.mp3"
                        },
                        {
                            name: "Droopy Likes Your Face", url: DOMAIN + "c418/volume-alpha/spotifydown.com - Droopy Likes Your Face.mp3"
                        },
                    ]
                },
                {
                    name: "Minecraft - Volume Beta", cover: DOMAIN + "c418/volume-beta/cover.jpg", year: 2013,
                    tracks: [
                        {name: "Ki", url: DOMAIN + "c418/volume-beta/spotifydown.com - Ki.mp3"},
                        {name: "Alpha", url: DOMAIN + "c418/volume-beta/spotifydown.com - Alpha.mp3"},
                        {name: "Dead Voxel", url: DOMAIN + "c418/volume-beta/spotifydown.com - Dead Voxel.mp3"},
                        {name: "Blind Spots", url: DOMAIN + "c418/volume-beta/spotifydown.com - Blind Spots.mp3"},
                        {name: "Flake", url: DOMAIN + "c418/volume-beta/spotifydown.com - Flake.mp3"},
                        {name: "Moog City 2", url: DOMAIN + "c418/volume-beta/spotifydown.com - Moog City 2.mp3"},
                        {name: "Concrete Halls", url: DOMAIN + "c418/volume-beta/spotifydown.com - Concrete Halls.mp3"},
                        {name: "Biome Fest", url: DOMAIN + "c418/volume-beta/spotifydown.com - Biome Fest.mp3"},
                        {name: "Mutation", url: DOMAIN + "c418/volume-beta/spotifydown.com - Mutation.mp3"},
                        {name: "Haunt Muskie", url: DOMAIN + "c418/volume-beta/spotifydown.com - Haunt Muskie.mp3"},
                        {name: "Warmth", url: DOMAIN + "c418/volume-beta/spotifydown.com - Warmth.mp3"},
                        {name: "Floating Trees", url: DOMAIN + "c418/volume-beta/spotifydown.com - Floating Trees.mp3"},
                        {name: "Aria Math", url: DOMAIN + "c418/volume-beta/spotifydown.com - Aria Math.mp3"},
                        {name: "Kyoto", url: DOMAIN + "c418/volume-beta/spotifydown.com - Kyoto.mp3"},
                        {name: "Ballad of the Cats", url: DOMAIN + "c418/volume-beta/spotifydown.com - Ballad of the Cats.mp3"},
                        {name: "Taswell", url: DOMAIN + "c418/volume-beta/spotifydown.com - Taswell.mp3"},
                        {name: "Beginning 2", url: DOMAIN + "c418/volume-beta/spotifydown.com - Beginning 2.mp3"},
                        {name: "Dreiton", url: DOMAIN + "c418/volume-beta/spotifydown.com - Dreiton.mp3"},
                        {name: "The End", url: DOMAIN + "c418/volume-beta/spotifydown.com - The End.mp3"},
                        {name: "Chirp", url: DOMAIN + "c418/volume-beta/spotifydown.com - Chirp.mp3"},
                        {name: "Wait", url: DOMAIN + "c418/volume-beta/spotifydown.com - Wait.mp3"},
                        {name: "Mellohi", url: DOMAIN + "c418/volume-beta/spotifydown.com - Mellohi.mp3"},
                        {name: "Stal", url: DOMAIN + "c418/volume-beta/spotifydown.com - Stal.mp3"},
                        {name: "Strad", url: DOMAIN + "c418/volume-beta/spotifydown.com - Strad.mp3"},
                        {name: "Eleven", url: DOMAIN + "c418/volume-beta/spotifydown.com - Eleven.mp3"},
                        {name: "Ward", url: DOMAIN + "c418/volume-beta/spotifydown.com - Ward.mp3"},
                        {name: "Mall", url: DOMAIN + "c418/volume-beta/spotifydown.com - Mall.mp3"},
                        {name: "Blocks", url: DOMAIN + "c418/volume-beta/spotifydown.com - Blocks.mp3"},
                        {name: "Far", url: DOMAIN + "c418/volume-beta/spotifydown.com - Far.mp3"},
                        {name: "Intro", url: DOMAIN + "c418/volume-beta/spotifydown.com - Intro.mp3"},
                    ]
                }
            ]
        }
    ] as Array<AuthorType>,

    initAudio: new Audio(),

    audioState: {
        source: new Audio(),
        isPlaying: false,

        isMyVibeActive: false,
        myVibeHistory: [] as Array<NewTrackType>,
        myVibeHistoryPos: -1,

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
    favoritePlaylistIsPinned: false,
    favoriteAuthors: [] as Array<AuthorType>,
    favoriteAlbums: [] as Array<AlbumType>,

    pins: [] as Array<PinType>
}

let mainIdController = 1;
initialState.audioState.source.volume = 0.2;


const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        init(state) {
            state.mainData.forEach(author => {
                author.id = mainIdController++;
                author.albums.forEach(album => {
                    album.id = mainIdController++;
                    album.tracks.forEach(track => {
                        track.cover = track.cover ? track.cover : album.cover;
                        track.id = mainIdController++;
                        track.author = author.name;
                        track.album = album.name;
                    })
                })
            })
        },
        initDuration(state, action) {
            state.initAudio.volume = 0;
            state.initAudio.src = action.payload.url;
        },

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
            audioState.isMyVibeActive = false;
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
        //refactor etot yzhas
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

        //broken
        myVibePlay({audioState, ...state}) {

            let allTracks: Array<NewTrackType> = [];

            state.mainData.forEach(author => {
                author.albums.forEach(album => {
                    album.tracks.forEach(track => allTracks.push(track));
                })
            })

            audioState.currentQueue = allTracks;
            audioState.placeInQueue = Math.floor(Math.random() * audioState.currentQueue.length);
            audioState.currentTrack = audioState.currentQueue[audioState.placeInQueue];
            audioState.source.src = audioState.currentQueue[audioState.placeInQueue].url;

            audioState.myVibeHistory.push(audioState.currentTrack);
            audioState.myVibeHistoryPos++;

            audioState.source.play();
            audioState.isMyVibeActive = true;
            audioState.isPlaying = true;
        },
        myVibeNext({audioState}) {
            if (audioState.myVibeHistoryPos === audioState.myVibeHistory.length - 1) {
                audioState.placeInQueue = Math.floor(Math.random() * audioState.currentQueue.length);
                audioState.currentTrack = audioState.currentQueue[audioState.placeInQueue];
                audioState.source.src = audioState.currentQueue[audioState.placeInQueue].url;

                audioState.myVibeHistory.push(audioState.currentTrack);
                audioState.myVibeHistoryPos++;
            } else {
                audioState.myVibeHistoryPos++;
                audioState.currentTrack = audioState.myVibeHistory[audioState.myVibeHistoryPos];
                audioState.source.src = audioState.myVibeHistory[audioState.myVibeHistoryPos].url!;
            }

            audioState.source.play();
            audioState.isPlaying = true;
        },
        myVibePrev({audioState}) {
            audioState.myVibeHistoryPos--;
            audioState.currentTrack = audioState.myVibeHistory[audioState.myVibeHistoryPos];
            audioState.source.src = audioState.myVibeHistory[audioState.myVibeHistoryPos].url!;
            audioState.source.play();
            audioState.isPlaying = true;
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
        },
        removeAuthorFromFavorites(state, action) {
            state.favoriteAuthors.forEach((author, index) => {
                if (author.id === action.payload) {
                    state.favoriteAuthors.splice(index, 1);
                }
            })

            state.mainData.forEach(author => {
                if (author.id === action.payload) {
                    author.isFavorite = false;
                }
            })
        },
        addAlbumToFavorites(state, action) {
            state.mainData.forEach(author => {
                author.albums.forEach(album => {
                    if (album.id === action.payload) {
                        album.isFavorite = true;
                        state.favoriteAlbums = [album, ...state.favoriteAlbums];
                    }
                })
            });
        },
        removeAlbumFromFavorites(state, action) {
            state.favoriteAlbums.forEach((album, index) => {
                if (album.id === action.payload) {
                    state.favoriteAlbums.splice(index, 1);
                }
            });

            state.mainData.forEach(author => {
                author.albums.forEach(album => {
                    if (album.id === action.payload) {
                        album.isFavorite = false;
                    }
                })
            });
        },

        addPin(state, {payload: {cover, name, type, id}}) {
            let newPin: PinType = {id, cover, name, type};

            if (type === "author"){
                state.mainData.forEach(author => {
                    if (author.id === id) {
                        author.isPinned = true;
                    }
                });
                state.favoriteAuthors.forEach(author => {
                    author.id === id && (author.isPinned = true)
                })
            } else if (type === "playlist") {
                state.favoritePlaylistIsPinned = true;
            } else if (type === "album" || type === "single") {
                state.mainData.forEach(author => {
                    author.albums.forEach(album => {
                        if (album.id === id) {
                            album.isPinned = true;
                            newPin.path = `/${author.name.toLowerCase()}/${album.name.toLowerCase()}`
                        }
                    })
                })
                state.favoriteAlbums.forEach(album => {
                    album.id === id && (album.isPinned = true)
                })
            }

            state.pins = [newPin, ...state.pins];
        },
        deletePin(state, {payload: {type, id}}) {
            state.pins.forEach((pin, index) => {
                if (pin.id === id) {
                    state.pins.splice(index, 1);
                }
            });

            if (type === "author"){
                state.mainData.forEach(author => {
                    if (author.id === id) {
                        author.isPinned = false;
                    }
                })

                state.favoriteAuthors.forEach(author => {
                    author.id === id && (author.isPinned = false)
                })
            } else if (type === "playlist") {
                state.favoritePlaylistIsPinned = false;
            } else if (type === "album" || type === "single") {
                state.mainData.forEach(author => {
                    author.albums.forEach(album => {
                        if (album.id === id) {
                            album.isPinned = false;
                        }
                    })
                })

                state.favoriteAlbums.forEach(album => {
                    album.id === id && (album.isPinned = false)
                })
            }
        }
    }
});

export const {
    audioPlay, audioPause,
    audioResume, onScrollChange,
    changeAudioVolume, audioPlayNext,
    audioPlayPrev, audioSwitchIsRepeating,
    audioSwitchIsRandom, myVibePlay, myVibeNext,
    addTrackToFavoritePlaylist, removeTrackFromFavoritePlaylist,
    addAuthorToFavorites, removeAuthorFromFavorites,
    addPin, deletePin,
    addAlbumToFavorites, removeAlbumFromFavorites, init,
    myVibePrev, initDuration
} = mainSlice.actions;
export default mainSlice.reducer;

