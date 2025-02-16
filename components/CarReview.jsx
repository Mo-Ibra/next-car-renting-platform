"use client"

import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"

import { reviews } from "@/data/reviews";

import StarRating from "@/components/StarRating";

function ReviewCard({ review }) {
    return (
        <Card className="p-6">
            <div className="flex items-start justify-between">
                <div className="flex gap-4">
                    <Avatar className="h-12 w-12">
                        <AvatarImage src={review.author.avatar} alt={review.author.name} />
                    </Avatar>
                    <div>
                        <h3 className="font-semibold">{review.author.name}</h3>
                        <p className="text-sm text-muted-foreground">
                            {review.author.role} at {review.author.company}
                        </p>
                    </div>
                </div>
                <p className="text-sm text-muted-foreground">{review.date}</p>
            </div>
            <div className="mt-4">
                <StarRating rating={review.rating} />
                <p className="mt-4 text-muted-foreground">{review.comment}</p>
            </div>
        </Card>
    )
}

export default function CarReview() {
    return (
        <section className="py-8">
            <div className="container mx-auto px-4">
                <div className="flex items-center gap-3 mb-6">
                    <h2 className="text-xl font-semibold">Reviews</h2>
                    <span className="inline-flex items-center justify-center rounded-md bg-blue-600 px-2.5 py-0.5 text-sm font-semibold text-white">
                        13
                    </span>
                </div>

                <div className="space-y-4">
                    {reviews.map((review) => (
                        <ReviewCard key={review.id} review={review} />
                    ))}
                </div>

                <Button variant="ghost" className="mx-auto mt-6 flex items-center gap-2 text-blue-600">
                    Show All
                    <ChevronDown className="h-4 w-4" />
                </Button>
            </div>
        </section>
    )
}