import React from 'react';
import PageTemplate from './PageTemplate';

import './stylesheets/pages.css';

export const Home = () => (
    <PageTemplate>
        <section className="home">
            <h1>[Home Page]</h1>
        </section>
    </PageTemplate>
);

export const About = () => (
    <PageTemplate>
        <section className="events">
            <h1>[About the Company]</h1>
        </section>
    </PageTemplate>
);

export const Events = () => (
    <PageTemplate>
        <section className="events">
            <h1>[Events Calendar]</h1>
        </section>
    </PageTemplate>
);

export const Products = () => (
    <PageTemplate>
        <section className="products">
            <h1>[Products Catalog]</h1>
        </section>
    </PageTemplate>
);

export const Contact = () => (
    <PageTemplate>
        <section className="contact">
            <h1>[Contact Us]</h1>
        </section>
    </PageTemplate>
);

// eslint-disable-next-line react/prop-types
export const Whoops404 = ( { location } ) => (
    <PageTemplate>
        <div className="whoops-404">
            <h1>Resource not found at { location.pathname }</h1>
        </div>
    </PageTemplate>
);
