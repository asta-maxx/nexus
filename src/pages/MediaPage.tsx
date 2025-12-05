import './MediaPage.css';

function MediaPage() {
    // YouTube video ID extracted from the URL
    const featuredVideoId = 'p0c9Iiv6hKY';

    return (
        <div className="media-page">
            {/* Hero Section */}
            <section className="media-hero">
                <div className="media-hero-bg">
                    <div className="media-particles"></div>
                    <div className="media-grid-lines"></div>
                </div>
                <div className="media-hero-content">
                    <div className="media-badge">
                        <span className="media-badge-icon"></span>
                        <span>ARCHIVES</span>
                    </div>
                    <h1 className="media-title">
                        <span className="media-title-accent">//</span> MEDIA VAULT
                    </h1>
                    <p className="media-subtitle">
                        Captured moments from the intersection of innovation and imagination
                    </p>
                </div>
                <div className="media-hero-decor">
                    <div className="media-corner media-corner-tl"></div>
                    <div className="media-corner media-corner-tr"></div>
                    <div className="media-corner media-corner-bl"></div>
                    <div className="media-corner media-corner-br"></div>
                </div>
            </section>

            {/* Featured Video Section */}
            <section className="media-section">
                <div className="media-container">
                    <div className="media-section-header">
                        <div className="media-section-line"></div>
                        <h2>FEATURED</h2>
                        <div className="media-section-line"></div>
                    </div>

                    <div className="media-video-wrapper">
                        <div className="media-video-frame">
                            <div className="media-video-corner media-video-corner-tl"></div>
                            <div className="media-video-corner media-video-corner-tr"></div>
                            <div className="media-video-corner media-video-corner-bl"></div>
                            <div className="media-video-corner media-video-corner-br"></div>

                            <iframe
                                src={`https://www.youtube.com/embed/${featuredVideoId}?rel=0&modestbranding=1`}
                                title="NEXUS Featured Video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="media-video-iframe"
                            />
                        </div>

                        <div className="media-video-info">
                            <div className="media-video-status">
                                <span className="media-status-dot"></span>
                                <span>NEXUS CHRONICLES</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Coming Soon Section */}
            <section className="media-section media-section-alt">
                <div className="media-container">
                    <div className="media-coming-soon">
                        <div className="media-coming-soon-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                                <path d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                            </svg>
                        </div>
                        <h3>MORE CONTENT INCOMING</h3>
                        <p>Event recordings, workshops, and project showcases coming soon</p>
                        <div className="media-coming-soon-bar">
                            <div className="media-coming-soon-progress"></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default MediaPage;
