import {AuthorType, NewTrackType} from "../types/type.ts";

export const getAllTracks = (mainData: Array<AuthorType>): Array<NewTrackType> => {
    let allTracks: Array<NewTrackType> = [];

    mainData.forEach(author => {
        author.albums.forEach(album => {
            album.tracks.forEach(track => {
                allTracks.push(track);
            })
        })
    })

    return allTracks;
}