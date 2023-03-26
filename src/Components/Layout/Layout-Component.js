import React from 'react'
import './Layout-Styles.scss'

const LayoutComponent = () => {



    return (
        <div className='layout-component-styles'>
            <header> this is header</header>
            <article className='this-is-article-body'>
                <nav> this is side nav</nav>
                <body>
                    asdf
                    {/* <Outlet /> */}
                </body>

            </article>


        </div>
    )
}

export default LayoutComponent