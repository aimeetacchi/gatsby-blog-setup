import React from 'react'
import Hemel from 'react-helmet'


function Metatags(props) {

    return (
        <Helmet
            title={props.title}
            meta={[
                { name: 'Title', content: props.title },
                { name: 'Description', content: props.description },
                {
                    property: 'og:title',
                    content: props.title,
                },
                {
                    property: 'og:url',
                    content: props.pathname ? props.url + props.pathname : props.url,
                },

                {
                    property: 'og:description',
                    content: props.description,
                },

                {
                    property: 'og:image:width',
                    content: '1200',
                },
                {
                    property: 'og:image:height',
                    content: '630',
                },
                {
                    property: 'og:locale',
                    content: 'en',
                },
                { name: 'twitter:card', content: 'summary_large_image' },

                { name: 'twitter:title', content: 'props.title' },

                {
                    name: 'twitter:description',
                    content: props.description,
                },
                {
                    name: 'twitter:image',
                    content: props.thumbnail && props.thumbnail,
                },
                { property: 'og:type', content: 'website' },
                { name: 'twitter:creator', content: '@aimeetacchi' },
                { property: 'og:site_name', content: 'mysitename' },
            ]}
        >
            <html lang="en" />
        </Helmet>
    )
}

export default Metatags;