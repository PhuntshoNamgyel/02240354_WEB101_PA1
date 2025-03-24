import PostFeed from "../../components/ui/PostFeed";

export default function PopularPage() {
    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Popular</h2>
            
            {/* Popular Posts Feed */}
            <PostFeed />
        </div>
    );
}
