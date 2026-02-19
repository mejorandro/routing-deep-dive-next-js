import { getLatestNews } from "@/app/lib/news";
import NewsList from "@/app/components/news-list";

export default function LatestPage(){
    const latestNews = getLatestNews();

    return (
        <>
            <h2>Latest Page!</h2>
            <NewsList news={ latestNews }/>
        </>
    )
}