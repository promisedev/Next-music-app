import Layout from "@/components/layout2";
import Styles from "@/styles/about.module.css"
import Header from "@/components/headers"
import Seo from '@/components/seo'

const Privacy = () => {
  return <Layout>
    <Seo title="Privacy | Prophegos Music" description="Prophegos privacy policy" og=""/>
    <Header/>
    <section className={Styles.privacy_body_cont}>
<article className={Styles.privacy_body}>
<h2>Prophegos Privacy Policy</h2>
    <p>Effective as of 12 December 2022</p>
<ul>
<li> About this Policy</li>
<p>This Privacy Policy describes how we process your personal data at Spotify AB. From now on, we'll call it the 'Policy'.</p>

<p>It applies to your use of:</p>



</ul>

</article>

    </section>
  </Layout>;
};

export default Privacy;
