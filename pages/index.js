import Container from '../components/container'
import MoreStories from '../components/more-stories'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'

import Image from 'next/image'

export default function Index({ allPosts }) {
    const heroPost = allPosts[0]
    const morePosts = allPosts.slice(1)

    return (
    <div>
    
   
  
  <div className="sidebar"  style={{ 
      backgroundImage: `url("https://images.unsplash.com/photo-1609262855551-76ff9bb66efe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80")`}}>
  
  
  <a href="#about">About</a>
  <a href="#services">Services</a>
  <a href="#clients">Clients</a>
  <a href="#contact">Contact</a>
</div>

    
    
    <div className="content">

    <Layout>
        <Head>
          <title></title>
        </Head>
        <Container>
        
         
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>

      <h2>Sidebar</h2>
      <p>This sidebar is of full height (100%) and always shown.</p>
      <p>Scroll down the page to see the result.</p>
      <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
      <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
      <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
      <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
    </div>
    
    <style jsx>{`
        
        body {
          margin: 0;
          font-family: "Lato", sans-serif;
        }
        
img {
  padding-bottom: 5px;
}

        .sidebar {
          margin: 0;
          text-align: center;
          padding-top: 10%;
          width: 15%;
          background-color: #f1f1f1;
          position: fixed;
          height: 100%;
          overflow: auto;
        }
        
        .sidebar a {
          display: block;
          font-size: 25px;
          color: white;
          padding: 16px;
          text-decoration: none;
        }
         
        .sidebar a.active {
          background-color: #4CAF50;
          color: white;
        }
        
        .sidebar a:hover:not(.active) {
          background-color: #555;
          color: white;
        }
        
        div.content {
          margin-left: 15%;
          font-size: 25px;
          padding: 1px 16px;
          height: 1000px;
        }
        
        @media screen and (max-width: 700px) {
          .sidebar {
            width: 100%;
            height: auto;
            position: relative;
            padding-bottom: 18px;
          }
          .sidebar a {
            
            float: left;
            font-size: 20px;
          }
          div.content {
            margin-left: 0;
            font-size: 20px;
          }
        }
        
        @media screen and (max-width: 400px) {
          .sidebar a {

            font-size: 15px;
            float: left;
          }
        }
        
       
        
        `}</style>
    
    </div>
    
    )
    
    }

    export async function getStaticProps() {
        const allPosts = getAllPosts([
          'title',
          'date',
          'slug',
          'author',
          'coverImage',
          'excerpt',
        ])
      
        return {
          props: { allPosts },
        }
      }