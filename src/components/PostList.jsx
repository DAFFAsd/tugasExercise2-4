import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostCard from './PostCard'; 

const PostList = () => {
  const [updatedPosts, setUpdatedPosts] = useState([]); 

  
  const predefinedPosts = [
    {
      userId: 1,
      id: 1,
      title: "Pentingnya Penelitian dalam Pengembangan Ilmu Pengetahuan",
      body: "Penelitian memiliki peran yang krusial dalam kemajuan ilmu pengetahuan. Dalam lingkup akademis kuliah, penelitian menjadi salah satu fondasi utama dalam mendalami suatu bidang studi."
    },
    {
        userId: 1,
        id: 2,
        title: "Kesetaraan Gender di Lingkungan Pendidikan",
        body: "Kesetaraan gender dalam konteks pendidikan merupakan topik yang penting untuk dibahas. Adanya kesetaraan gender di lingkungan akademis kuliah dapat memberikan kontribusi signifikan terhadap keberagaman dan inklusi."
      },
      {
        userId: 1,
        id: 3,
        title: "Pengaruh Teknologi Terhadap Metode Pembelajaran",
        body: "Penggunaan teknologi dalam proses pembelajaran di era digital telah memberikan dampak yang signifikan. Metode pembelajaran yang terintegrasi dengan teknologi memungkinkan akses yang lebih luas terhadap sumber belajar."
      },
      {
        userId: 1,
        id: 4,
        title: "Hambatan dalam Proses Pembelajaran Jarak Jauh",
        body: "Pembelajaran jarak jauh memiliki tantangan tersendiri, termasuk keterbatasan akses, interaksi yang terbatas, dan masalah teknis. Mengatasi hambatan ini merupakan fokus penting dalam pengembangan pendidikan jarak jauh."
      },
      {
        userId: 1,
        id: 5,
        title: "Peran Etika dalam Dunia Akademis",
        body: "Etika di lingkungan akademis memiliki peran yang sangat penting. Kesadaran akan etika dalam penelitian, pengajaran, dan kolaborasi merupakan landasan integritas akademis yang tak tergantikan."
      },
      {
        userId: 1,
        id: 6,
        title: "Pentingnya Keterampilan Soft Skills bagi Mahasiswa",
        body: "Keterampilan soft skills, seperti kepemimpinan, komunikasi, dan kerjasama tim, memiliki peran krusial dalam persiapan mahasiswa untuk dunia kerja. Pengembangan soft skills sejak kuliah menjadi investasi penting bagi masa depan karier."
      },
      {
        userId: 1,
        id: 7,
        title: "Peran Komunitas dalam Pembelajaran Kolaboratif",
        body: "Pembelajaran kolaboratif diakui memiliki dampak positif yang besar. Peran komunitas, baik di dalam maupun di luar lingkungan akademis, dapat memperkuat pembelajaran kolaboratif dalam meningkatkan pemahaman dan keterampilan mahasiswa."
      },
      {
        userId: 1,
        id: 8,
        title: "Implementasi Kebijakan Pendidikan di Berbagai Negara",
        body: "Kebijakan pendidikan memainkan peran penting dalam menentukan kualitas dan akses pendidikan. Memahami perbedaan implementasi kebijakan pendidikan di berbagai negara dapat memberikan wawasan yang luas dalam pengembangan sistem pendidikan."
      },
      {
        userId: 1,
        id: 9,
        title: "Transformasi Digital dalam Kurikulum Pendidikan",
        body: "Transformasi digital telah mengubah cara kita belajar dan mengajar. Integrasi teknologi dalam kurikulum pendidikan memerlukan adaptasi terhadap perubahan ini untuk menghasilkan pendidikan yang relevan dengan tuntutan zaman."
      },
      {
        userId: 1,
        id: 10,
        title: "Pentingnya Keberagaman Budaya dalam Pembelajaran",
        body: "Keberagaman budaya memiliki dampak positif dalam pembelajaran di lingkungan akademis. Memahami dan menghargai keberagaman budaya membuka peluang untuk pembelajaran lintas budaya dan perspektif yang lebih luas."
      }
  ];


  const updatePredefinedPosts = async () => {
    try {
      const updatedPostsData = [];
      for (let i = 0; i < predefinedPosts.length; i++) {
        const postId = predefinedPosts[i].id;
        const postTitle = predefinedPosts[i].title
        const postBody = predefinedPosts[i].body
        const updatedPostData = {
          id: postId,
          title: postTitle,
          body: postBody,
          userId: 1,
        };


        const updateResponse = await axios.put(`https://jsonplaceholder.typicode.com/posts/${postId}`, updatedPostData);

        if (updateResponse.status === 200) {
          const updatedData = updateResponse.data;
          updatedPostsData.push(updatedData);
        } else {
          throw new Error(`Failed to update post with ID: ${postId}`);
        }
      }
      setUpdatedPosts(updatedPostsData);
    } catch (error) {
      console.error('Error updating predefined posts:', error);
    }
  };

  useEffect(() => {
    updatePredefinedPosts();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Daftar Blog/Post</h1>
      <div className="w-full max-w-3xl">
        {updatedPosts.map((updatedPost) => (
          <PostCard key={updatedPost.id} title={updatedPost.title} body={updatedPost.body} />
        ))}
      </div>
    </div>
  );
};

export default PostList;