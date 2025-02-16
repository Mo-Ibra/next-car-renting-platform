import { Star } from "lucide-react";

function StarRating({ rating }) {
    return (
        <div className="flex">
            {[...Array(5)].map((_, index) => (
                <Star
                    key={index}
                    className={`w-5 h-5 ${index < rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
                />
            ))}
        </div>
    )
}

export default StarRating;