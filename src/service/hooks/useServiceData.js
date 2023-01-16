import { useHttp } from "./useHttp";

export const useServiceData = () => {
    const request = useHttp();

    const _transformChar = char => {                                                
        return {
            id: char.id,
            name: char.name,
            date: `${char.modified.slice(0, 10)}`,
            comics: char.comics.available,
            series: char.series.available,
            stories: char.stories.available,
            img: char.thumbnail.path + '.' + char.thumbnail.extension,
            descr: char.description ? char.description : 'описание персонажа отсутствует',
            comicsItems: char.comics.items ? char.comics.items : 'комиксы отсутствуют',
            link: char.urls[0].url
        }
    }

    const getAllUsers = async (url) => {                       
        const res = await request(url);

        return res.data.results.map(_transformChar);
    }

    return getAllUsers;
}