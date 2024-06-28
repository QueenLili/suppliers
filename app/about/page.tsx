// app/about/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us | Tanzania-China Trade',
    description: 'Learn about our mission to facilitate trade and cooperation between Tanzania and China.',
};

export default function AboutUsPage() {
    return (
        <main className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4 text-center">About Us</h1>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
                <p className="text-gray-700 leading-relaxed">
                    We strive to be a leading platform fostering economic partnership and cultural exchange between Tanzania and China. Our focus is on providing resources and information to businesses and individuals interested in trade, investment, and collaboration.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Our Values</h2>
                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                    <li>Transparency and integrity in all our operations</li>
                    <li>Mutual respect and understanding</li>
                    <li>Sustainable and equitable economic development</li>
                </ul>
            </section>

            {/* ...more sections about the team, history, partners, etc. */}
        </main>
    );
}
