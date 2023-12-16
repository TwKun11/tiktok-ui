import Header from '@/component/Layout/components/Header';
function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container"> </div>
            <div className="content">{children}</div>
        </div>
    );
}

export default DefaultLayout;
