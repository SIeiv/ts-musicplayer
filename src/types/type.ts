export type TrackType = {
    url: string | null
    image: string | null
    author: string | null
    name: string | null
    id: number | null
    isFavorite?: boolean | null
}

export type NewTrackType = {
    name: string | null
    id: number | null
    url: string | null
    cover: string | null
    duration?: number | null
    isFavorite?: boolean | null

    author?: string
    album?: string
}

export type AlbumType = {
    name: string
    id: number
    cover: string
    year: string
    isSingle: boolean
    tracks: Array<NewTrackType>
}

export type AuthorType = {
    name: string
    id: number
    avatar: string
    albums: Array<AlbumType>

    isFavorite?: boolean
    isPinned?: boolean
}

export type PinType = {
    id: number
    cover: string
    name: string
    type: "author" | "album" | "playlist" | "single"
}