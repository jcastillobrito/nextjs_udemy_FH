
export default function GeneralLayout({

    children,
    }: Readonly<{
    children: React.ReactNode;
    }>) {
    return (
       
            <div className="flex flex-col  items-center p-24">
                <h1>Hola JC</h1>
                {children}
            </div>

    )};