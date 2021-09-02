import Layout from '../../components/design/layout'
import Link from 'next/link';
import Image from 'next/image';

export default function Page () {
        return (
        <Layout>
            <div className="content-block">
                <div className="post-thubnail">
                    <Link href="/blog/read?id=1">
                        <Image src="http://placehold.it/800x400?text=800x400" width="800" height="400" fluid="" alt=""/>
                    </Link>
                </div>

                <div className="post-content">
                    <div className="blog-meta">
                        <span className="date">2021-02-03</span>

                        <span className="author">By
                            <Link className="author-name" href="/author/solao">
                                Solao
                            </Link>
                        </span>


                        <span className="category">
                            <Link href="/category/Category-1">
                               Category 1
                            </Link>
                        </span>

                    </div>
                    <h3 className="title"><Link href="/blog/read?id=2">Blog 2</Link></h3>
                    <p className="description">description text</p>
                    <div className="read-more">
                        <Link href="/blod/read?id=3">
                            <span>Read More</span>
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    )
}