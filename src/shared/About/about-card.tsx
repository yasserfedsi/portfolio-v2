import { Card, CardContent } from "@/components/ui/card";

export function AboutCard({
    icon,
    title,
    text,
}: {
    icon: React.ReactNode;
    title: string;
    text: string;
}) {
    return (
        <Card className="bg-[#111111]/70 border border-zinc-700 backdrop-blur-sm hover:scale-105 transition">
            <CardContent className="p-6">
                <div className="text-white text-2xl mb-4">{icon}</div>
                <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
                <p className="text-zinc-400 text-sm">{text}</p>
            </CardContent>
        </Card>
    );
}