import { Link } from 'remix'
export default function Header() {
    return (
        <header className="bg-orange-500 py-2">
            <div className="max-w-4xl mx-auto px-8">
                <h1 className="text-white text-lg font-semibold">
                    <Link to="/">Hacker News</Link>
                </h1>
            </div>
        </header>
    );
}