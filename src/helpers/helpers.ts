import {AlbumType, AuthorType, NewTrackType} from "../types/type.ts";

export const getAllTracks = (mainData: Array<AuthorType>): Array<NewTrackType> => {
    let allTracks: Array<NewTrackType> = [];

    mainData.forEach(author => {
        author.albums.forEach(album => {
            album.tracks.forEach(track => {
                allTracks.push({...track, author: author.name});
            })
        })
    })

    return allTracks;
}

export const getAllAlbums = (mainData: Array<AuthorType>): Array<AlbumType> => {
    let allAlbums: Array<AlbumType> = [];

    mainData.forEach(author => {
        author.albums.forEach(album => {
            allAlbums.push(album);
        })
    })

    return allAlbums;
}

export const getAllAuthors = (mainData: Array<AuthorType>): Array<AuthorType> => {
    let allAuthors: Array<AuthorType> = [];

    mainData.forEach(author => {
        allAuthors.push(author);
    })

    return allAuthors;
}
