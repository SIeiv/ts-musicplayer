import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AlbumType, AuthorType, NewTrackType, PinType} from "../types/type.ts";
import author from "../components/common/Author/Author.tsx";

const DOMAIN = 'http://f1003580.xsph.ru/';

const initialState = {
    mainData: [
        {
            name: "Powerwolf", avatar: DOMAIN + "powerwolf/avatar.jpg", albums: [
                {
                    name: "Blessed & Possessed", id: 1, cover: "", tracks: [
                        {name: "Army of the Night", id: 111, url: "", cover: ""}
                    ]
                },
                {
                    name: "AI Music", cover: DOMAIN + "powerwolf/ai-music/cover.png", year: 2024, tracks: [
                        {
                            name: "Владимир Путин Молодец!",
                            url: DOMAIN + "powerwolf/ai-music/Powerwolf - Владимир Путин Молодец! (AI Music, Udio AI Cover).mp3",
                        },
                        {
                            name: "Говновоз",
                            url: DOMAIN + "powerwolf/ai-music/Powerwolf - Говновоз (AI).mp3",
                        },
                        {
                            name: "Вот и помер дед Максим",
                            url: DOMAIN + "powerwolf/ai-music/Вот и помер дед Максим, но исполнитель POWERWOLF (AI COVER).mp3",
                        },
                        {
                            name: "Убили негра",
                            url: DOMAIN + "powerwolf/ai-music/Powerwolf - Убили негра (AI Music, Udio AI Cover Запрещенные барабанщи.mp3",
                        },
                        {
                            name: "Частушки",
                            url: DOMAIN + "powerwolf/ai-music/Частушки, но это Powerwolf (AI cover).mp3",
                        },
                        {
                            name: "Терентий",
                            url: DOMAIN + "powerwolf/ai-music/Электрослабость - Терентий, но это Powerwolf (AI COVER).mp3",
                        },
                        {
                            name: "Священная война",
                            url: DOMAIN + "powerwolf/ai-music/Powerwolf - Священная война (Ai Cover).mp3",
                        },
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
            ]
        },
        /*{
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
        },*/
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
    addAlbumToFavorites, removeAlbumFromFavorites, init, myVibePrev
} = mainSlice.actions;
export default mainSlice.reducer;

