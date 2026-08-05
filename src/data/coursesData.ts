import { Course } from '../types';

export const COURSES_DATA: Course[] = [
  // 1. CODING KNIGHT
  {
    id: 'coding-knight',
    slug: 'coding-knight',
    number: 1,
    title: 'Coding Knight',
    category: 'coding',
    categoryName: 'Coding & Algoritma',
    badgeColor: 'border-orange-400 bg-orange-50 text-orange-600',
    bgLight: 'bg-orange-50/50',
    textColor: 'text-orange-600',
    ageRange: 'Usia 5–6 Tahun',
    minAge: 5,
    maxAge: 6,
    duration: '32 Pertemuan @ 45 menit',
    classSize: 'Private, Premium (4 Murid) & Grup (7-10 Murid)',
    difficulty: 'Pemula',
    language: 'English / Indonesia',
    shortDescription: 'Gerbang pertama si kecil ke dunia digital. Melalui permainan seru di ScratchJr, anak akan belajar logika dasar, kreativitas, dan literasi komputer.',
    fullDescription: 'Membuka Dunia Logika dan Kreativitas Melalui Coding Sejak Dini. Siswa belajar konsep coding fundamental dengan membuat animasi dan game interaktif mereka sendiri dalam lingkungan ScratchJr.',
    tools: ['Coding Knight Platform', 'ScratchJR', 'Google Docs', 'Buku Latihan Digital'],
    finalProject: {
      title: 'Petualangan Sang Ksatria',
      subtitle: 'Membuat Game Petualangan Interaktif',
      description: 'Para murid akan membuat permainan tentang petualangan sang Kesatria. Karakter utama akan menemui rintangan dan asisten, dengan tujuan perjalanan bertemu Sang Putri di dinding istana.'
    },
    outcomes: [
      'Kemampuan berpikir logis dan terstruktur',
      'Dasar-dasar pemrograman visual yang kuat',
      'Portofolio proyek berupa game dan animasi',
      'Peningkatan kreativitas dan kemampuan problem-solving',
      'Sertifikat penyelesaian kursus'
    ],
    primaryFunctions: [
      'Memperkenalkan konsep STEAM (Science, Technology, Engineering, Arts, Math) secara praktis',
      'Membangun fondasi untuk pembelajaran teknologi yang lebih lanjut di masa depan',
      'Mengajarkan ketekunan dan cara mengatasi error (debugging) dalam sebuah proyek',
      'Menjadi media ekspresi diri yang positif dan produktif di era digital'
    ],
    projects: [
      {
        id: 'ck-p1',
        lesson: 16,
        title: 'Basketball after School',
        author: 'Khaira',
        age: 6,
        type: 'youtube',
        link: 'https://youtu.be/0WnBmJpk95Q',
        description: 'Habis sekolah James mengajak Roy bermain basket seru banget! Klik bendera hijau untuk memulai dan klik basket supaya bisa memasukkan bola ke ring!'
      },
      {
        id: 'ck-p2',
        lesson: 24,
        title: 'Play football with Friends',
        author: 'David',
        age: 6,
        type: 'youtube',
        link: 'https://youtu.be/cJvwetVLXnI',
        description: 'Roy ngajak James main bola. Klik bendera hijau untuk memulai animasi dan mereka bisa ngobrol-ngobrol seru.'
      },
      {
        id: 'ck-p3',
        lesson: 32,
        title: "Cat's Park Adventure - Story",
        author: 'Al-Fatih',
        age: 6,
        type: 'youtube',
        link: 'https://www.youtube.com/watch?v=D8l0zp-ETl0',
        description: 'Jalan-jalan di taman bareng teman-teman lucu berbulu dan main petak umpet seru-seruan.'
      }
    ],
    modules: [
      {
        id: 'ck-m1',
        title: 'Modul 1: Dasar Algoritma & Perintah',
        lessons: [
          {
            id: 'M1.L1',
            lessonNumber: 1,
            title: 'Eksekutor dan Algoritma',
            url: 'https://docs.google.com/document/d/1CtN2638baHzMuyr9g9nMobBp8T1R-uodmt1lhD9XVcU/edit',
            materi: 'Berpetualang di Kerajaan Tablet untuk membantu sang Kesatria. Dikenalkan dengan konsep "eksekutor" dan "algoritma" lewat praktek.',
            tools: 'Level 1 pada aplikasi Coding Knight',
            tujuan: ['mengetahui apa itu algoritma', 'mengetahui apa itu eksekutor', 'dapat menyusun algoritma simpel']
          },
          {
            id: 'M1.L2',
            lessonNumber: 2,
            title: 'Program dan Memory Blok',
            url: 'https://docs.google.com/document/d/1yWmvxXgqqoSGR8KwQQxa3uLnA4SBlnSI6NXCMX_we4s/edit',
            materi: 'Membantu Kesatria mengembalikan warna ke Kerajaan. Berkenalan dengan konsep komando, program, dan blok memori.',
            tools: 'Level 2 pada aplikasi Coding Knight',
            tujuan: ['mengetahui apa itu komando', 'mengetahui apa itu program', 'dapat menghapus komando yang salah']
          },
          {
            id: 'M1.L3',
            lessonNumber: 3,
            title: 'Belajar untuk membaca dan menjalankan Program',
            url: 'https://docs.google.com/document/d/1g9CocDNbSa73Nti9FO7wobqu7XjsF4MrDUOx4FkR72Q/edit',
            materi: 'Membantu Kesatria melewati gua dan mengalahkan laba-laba. Diskusi pentingnya eksekutor menjalankan program dengan benar.',
            tools: 'Level 3 pada aplikasi Coding Knight',
            tujuan: ['memahami alasan eksekutor harus mengikuti program', 'dapat membaca program']
          },
          {
            id: 'M1.L4',
            lessonNumber: 4,
            title: 'Menyusun Algoritme Linear',
            url: 'https://docs.google.com/document/d/1e_NRIIEO_nRFd2RwR5Z8RJPsORcDlDI8_a7xh--WecA/edit',
            materi: 'Membuat program agar Kesatria bisa melewati hutan. Belajar pentingnya membuat program secara mandiri dengan menggeser komando.',
            tools: 'Level 4 pada aplikasi Coding Knight',
            tujuan: ['paham pentingnya membuat program mandiri', 'dapat meluncurkan dan memberhentikan program']
          },
          {
            id: 'M1.L5',
            lessonNumber: 5,
            title: 'Menyusun Algoritme Linear II',
            url: 'https://docs.google.com/document/d/1OeSnAxv3g49ajWxdjJoND7dCl3rNCUFH/edit',
            materi: 'Membantu Kesatria melewati padang gurun menuju istana. Mengulang cara membuat program dengan menggeser komando.',
            tools: 'Level 5 pada aplikasi Coding Knight',
            tujuan: ['paham cara menyusun program simpel untuk Coding Knight', 'dapat meluncurkan program']
          }
        ]
      },
      {
        id: 'ck-m2',
        title: 'Modul 2: Loops (Pengulangan)',
        lessons: [
          {
            id: 'M2.L1',
            lessonNumber: 6,
            title: 'Berkenalan dengan Loops (Pengulangan)',
            url: 'https://docs.google.com/document/d/1bRTHMxNpRcIEJGwyKe4Chz0Yef-d37lWJLdiJxJY3OE/edit',
            materi: 'Membantu Kesatria melewati pegunungan bersalju. Belajar apa itu loop dan cara mengaplikasikannya.',
            tools: 'Level 6 pada aplikasi Coding Knight',
            tujuan: ['paham apa itu loop dan kegunaannya', 'dapat menggunakan loop untuk mengurangi jumlah komando']
          },
          {
            id: 'M2.L2',
            lessonNumber: 7,
            title: 'Menyusun Algoritma Pengulangan',
            url: 'https://docs.google.com/document/d/1cZ_JXzGBAsNxz-N4pAnHVEO1deSi_V9BrocCJHjuP8k/edit',
            materi: 'Mengumpulkan kunci di aula istana untuk membuka gembok. Menggunakan algoritma loop dengan satu dan dua komando.',
            tools: 'Level 7 pada aplikasi Coding Knight',
            tujuan: ['paham apa itu loop', 'dapat menggunakan loop dengan dua komando']
          },
          {
            id: 'M2.L3',
            lessonNumber: 8,
            title: 'Menyusun Algoritma Pengulangan II',
            url: 'https://docs.google.com/document/d/1DUnbsvlkk3PNDc1BGQz6yDh4oZQTKFC8Fo2iXpIKypA/edit',
            materi: 'Mengalahkan monster di ruang bawah tanah dengan api hijau spesial. Mengulang teori dan melatih kemampuan program.',
            tools: 'Level 8 pada aplikasi Coding Knight',
            tujuan: ['paham pentingnya belajar pemrograman', 'dapat membuat program dengan loop']
          }
        ]
      },
      {
        id: 'ck-m3',
        title: 'Modul 3: ScratchJr & Animasi Dasar',
        lessons: [
          {
            id: 'M3.L1',
            lessonNumber: 9,
            title: 'Pengenalan ScratchJR',
            url: 'https://docs.google.com/document/d/1fVa-UAh8sL4_BadDD4viTujbQ2nZlCslZhqBsWL2wJY/edit',
            materi: 'Berkenalan dengan karakter Kucing dan memulai petualangan baru di lingkungan Scratch Jr.',
            tools: 'Aplikasi Scratch Jr',
            tujuan: ['mengetahui apa itu sprite dan scene', 'dapat membuat scene statis pada Scratch Jr']
          },
          {
            id: 'M3.L2',
            lessonNumber: 10,
            title: 'Events ScratchJR',
            url: 'https://docs.google.com/document/d/1wug8CrxFqfMBXvoq_O1PLIZULnZtd1oJFcEfn4IoBIc/edit',
            materi: 'Mengilustrasikan laut dan membuat gerak sprite saat diklik.',
            tools: 'Aplikasi Scratch Jr',
            tujuan: ['paham arti dari komando gerak', 'dapat membuat karakter bergerak ketika diklik']
          },
          {
            id: 'M3.L3',
            lessonNumber: 11,
            title: 'Perintah "Penampilan"',
            url: 'https://docs.google.com/document/d/1AMxddXJQQdqPNLhPj_ZaiDrv6Lu95TrQDkSIpP5NCas/edit',
            materi: 'Menggunakan komando Tampilan di Scratch Jr untuk latar malam berbintang.',
            tools: 'Aplikasi Scratch Jr',
            tujuan: ['dapat memprogram pergerakan dan penampilan sprite']
          },
          {
            id: 'M3.L4',
            lessonNumber: 12,
            title: 'Pengulangan di ScratchJr',
            url: 'https://docs.google.com/document/d/1rQC2jsx9NNzASiY5JzKvPCBMAgoqHWpp2VG9-Z0J07A/edit',
            materi: 'Kucing pergi ke kota untuk memberikan surat. Menggunakan loop di Scratch Jr.',
            tools: 'Aplikasi Scratch Jr',
            tujuan: ['dapat menggunakan loop di Scratch Jr', 'dapat membuat proyek dengan minimal dua scene']
          }
        ]
      },
      {
        id: 'ck-m4',
        title: 'Modul 4: Event Paralel & Proyek Kartun',
        lessons: [
          {
            id: 'M4.L1',
            lessonNumber: 13,
            title: 'Events, Memprogram banyak sprite dalam 1 waktu',
            url: 'https://docs.google.com/document/d/1YUc9qp-TuFzZofY3jKRpq2O48szdmhnHHVwW04f3Cqg/edit',
            materi: 'Mengatur aksi karakter secara simultan dengan event paralel.',
            tools: 'Aplikasi Scratch Jr',
            tujuan: ['paham cara memprogram aksi paralel', 'dapat memprogram kecepatan dan waktu tunggu']
          },
          {
            id: 'M4.L2',
            lessonNumber: 14,
            title: 'Program perubahan otomatis',
            url: 'https://docs.google.com/document/d/1opcEdPRnI7tFt6LWT5CILn8_GnVQlIeRzdB9VYo2L8o/edit',
            materi: 'Memprogram perubahan scene otomatis di Scratch Jr.',
            tools: 'Aplikasi Scratch Jr',
            tujuan: ['tahu cara memprogram perubahan scene otomatis', 'tahu cara menentukan urutan scene']
          },
          {
            id: 'M4.L3',
            lessonNumber: 15,
            title: 'Membuat animasi (Awal)',
            url: 'https://docs.google.com/document/d/1fNOnmvEism7X9ukG9l2kTri8xmCkaZYYKSApPCUM58Y/edit',
            materi: 'Membuat kartun besar, mengatur posisi karakter, dan pengisian suara.',
            tools: 'Aplikasi Scratch Jr',
            tujuan: ['mampu melakukan akting suara untuk scene', 'paham cara menggunakan kisi']
          },
          {
            id: 'M4.L4',
            lessonNumber: 16,
            title: 'Membuat animasi (Akhir)',
            url: 'https://docs.google.com/document/d/1ubOPibGZwF5g9Z1Q5_4d6c-YNv-ucWHkKLbCBAkSkBo/edit',
            materi: 'Membuat dan memprogram proyek kartun lengkap mandiri.',
            tools: 'Aplikasi Scratch Jr',
            tujuan: ['tahu cara memprogram kartun menggunakan alat standar Scratch Jr']
          }
        ]
      },
      {
        id: 'ck-m5',
        title: 'Modul 5: Pesan Interaktif & Tombol Game',
        lessons: [
          {
            id: 'M5.L1',
            lessonNumber: 17,
            title: 'Pesan',
            url: 'https://docs.google.com/document/d/1TGvgiBp78PARwUvJhfMkizGvQQc89K4OXy3IxgZME-o/edit',
            materi: 'Opsi pengiriman pesan antar karakter di Scratch Jr.',
            tools: 'Aplikasi Scratch Jr',
            tujuan: ['paham tujuan penggunaan pesan', 'paham cara memprogram pengiriman pesan']
          },
          {
            id: 'M5.L2',
            lessonNumber: 18,
            title: 'Menggunakan pesan dalam game',
            url: 'https://docs.google.com/document/d/1O8aSH1_ZgHP8WIr9FTOz_t1PNB4txYRnqlOAGQk2sis/edit',
            materi: 'Festival gelembung sabun. Memahami bahwa karakter bisa menerima pesan berulang.',
            tools: 'Aplikasi Scratch Jr',
            tujuan: ['dapat membuat banyak program untuk dijalankan oleh karakter yang sama']
          },
          {
            id: 'M5.L3',
            lessonNumber: 19,
            title: 'Program tombol dengan pesan',
            url: 'https://docs.google.com/document/d/1v_QDrkNT7iASiD_VQ2uOjWGkVfhfyakV9SBKmThEkjQ/edit',
            materi: 'Membuat tombol kontrol bercerita yang mengirim pesan saat ditekan.',
            tools: 'Aplikasi Scratch Jr',
            tujuan: ['dapat memprogram tombol dalam permainan dengan mengirim pesan']
          },
          {
            id: 'M5.L4',
            lessonNumber: 20,
            title: 'Membuat tombol untuk mengkontrol karakter',
            url: 'https://docs.google.com/document/d/1mODF9b2nSkCGq9XdQdmNo2QEk3e-gfvhe-H1AmUFaq4/edit',
            materi: 'Membuat tombol panah kontrol sprite di Scratch Jr.',
            tools: 'Aplikasi Scratch Jr',
            tujuan: ['dapat membuat permainan yang karakternya dikontrol dengan menekan tombol']
          }
        ]
      },
      {
        id: 'ck-m6',
        title: 'Modul 6: Kondisi Sentuh & Labirin',
        lessons: [
          {
            id: 'M6.L1',
            lessonNumber: 21,
            title: 'Kondisi Sentuh',
            url: 'https://docs.google.com/document/d/1FjyTUiQ8DTJYVX-PedlqnAEXknGXGHhV5xEkteWjS9g/edit',
            materi: 'Permainan memanen apel dengan komando kondisi sentuh.',
            tools: 'Aplikasi Scratch Jr',
            tujuan: ['paham cara menggunakan kondisi sentuh untuk memulai program']
          },
          {
            id: 'M6.L2',
            lessonNumber: 22,
            title: 'Mengirim pesan saat disentuh',
            url: 'https://docs.google.com/document/d/1v2mtitKBrOFePJIpMw-n2zibfWVLIBRxBVoZ_JuCaVw/edit',
            materi: 'Game labirin menyelamatkan ikan dari perangkap dengan kunci & rintangan.',
            tools: 'Aplikasi Scratch Jr',
            tujuan: ['dapat membuat permainan labirin yang menggunakan kondisi sentuh']
          },
          {
            id: 'M6.L3',
            lessonNumber: 23,
            title: 'Membuat game dengan animasi (Awal)',
            url: 'https://docs.google.com/document/d/1PSyr8ZeaCUTRFY004H4VdpZUZcZARfL9vQg-EsMf3KQ/edit',
            materi: 'Perjalanan Luar Angkasa: scene pembuka & penutup dengan pengisian suara.',
            tools: 'Aplikasi Scratch Jr',
            tujuan: ['dapat memprogram pengisian suara karakter']
          },
          {
            id: 'M6.L4',
            lessonNumber: 24,
            title: 'Membuat game dengan animasi (Akhir)',
            url: 'https://docs.google.com/document/d/1aDBvjBzZxhLwRJwyP3KJfHsefrHAGG3wbj-gp8Xb8mc/edit',
            materi: 'Roket menghindari bintang untuk sampai ke Bumi.',
            tools: 'Aplikasi Scratch Jr',
            tujuan: ['dapat memprogram sprite untuk kembali ke posisi awal setelah bersentuhan']
          }
        ]
      },
      {
        id: 'ck-m7',
        title: 'Modul 7: Proyek Kelompok & Cerita Game',
        lessons: [
          {
            id: 'M7.L1',
            lessonNumber: 25,
            title: 'Permilihan dan implementasi awal Project kelompok',
            url: 'https://docs.google.com/document/d/1SOiA0Wg9Hlq-LXwIe7xuyEEWQDWnptj_XLlDwTeYwbE/edit',
            materi: 'Membuat sprite dan background labirin untuk proyek kelompok.',
            tools: 'Aplikasi Scratch Jr',
            tujuan: ['dapat secara mandiri membuat permainan dengan dua scene']
          },
          {
            id: 'M7.L2',
            lessonNumber: 26,
            title: 'Melanjutkan Implementasi Project Kelompok',
            url: 'https://docs.google.com/document/d/1kc3ubINBbPlokvH2kw_1ZCG_X6xRWtdWTxBTMKFQihk/edit',
            materi: 'Memprogram karakter utama, rintangan, asisten, dan garis finis.',
            tools: 'Aplikasi Scratch Jr',
            tujuan: ['dapat membuat permainan labirin dan memprogram seluruh sprite di dalamnya']
          },
          {
            id: 'M7.L3',
            lessonNumber: 27,
            title: 'Melanjutkan Implementasi dari Project Kelompok (Akhir)',
            url: 'https://docs.google.com/document/d/1ooa2_HSx4mlAHdSJjW33U6yD1q9pXsqTjOzw-RIsEqI/edit',
            materi: 'Game menangkap objek yang menghilang, alur cerita & background.',
            tools: 'Aplikasi Scratch Jr',
            tujuan: ['dapat membuat alur cerita permainan sesuai syarat']
          },
          {
            id: 'M7.L4',
            lessonNumber: 28,
            title: 'Presentasi',
            url: 'https://docs.google.com/document/d/1bq96eQPbiqNjhlFoj4i1j_hA6s4bUI8DcUjI77dL6Fg/edit',
            materi: 'Memprogram scene dan mempresentasikan game kelompok.',
            tools: 'Aplikasi Scratch Jr',
            tujuan: ['dapat memprogram sprite sesuai tugas yang diberikan']
          }
        ]
      },
      {
        id: 'ck-m8',
        title: 'Modul 8: Proyek Akhir Individu Ksatria',
        lessons: [
          {
            id: 'M8.L1',
            lessonNumber: 29,
            title: 'Memilih dan mulai bekerja pada project individu',
            url: 'https://docs.google.com/document/d/1zFe7JjOsiuWqYDMWiWiGZ2ysusDZTAotJoGHamJp0FM/edit',
            materi: 'Game penyelamatan sprite dari perangkap, dua scene penutup (menang/kalah).',
            tools: 'Aplikasi Scratch Jr',
            tujuan: ['dapat membuat scene final yang berbeda tergantung hasilnya']
          },
          {
            id: 'M8.L2',
            lessonNumber: 30,
            title: 'Membuat murid mengerjakan project individu sesuai minat nya',
            url: 'https://docs.google.com/document/d/1OhjeX-Q4LcLyDxPA_HfPBXgANzIMzG0LoiCr8zYW4EY/edit',
            materi: 'Memprogram kunci dan beberapa pilihan cara menyelesaikan game.',
            tools: 'Aplikasi Scratch Jr',
            tujuan: ['dapat memprogram permainan dengan pilihan penyelesaian yang berbeda']
          },
          {
            id: 'M8.L3',
            lessonNumber: 31,
            title: 'Membuat murid mengerjakan project individu sesuai minat nya (akhir)',
            url: 'https://docs.google.com/document/d/1YVswz-NjPQkk56V3aFGF9mjeCf4j7epHU2NxbKIjzVk/edit',
            materi: 'Coding Knight Petualangan Sang Kesatria, menggunakan foto diri sebagai sprite.',
            tools: 'Aplikasi Scratch Jr',
            tujuan: ['dapat membuat cerita dengan syarat yang diberikan', 'dapat membuat sprite menggunakan foto']
          },
          {
            id: 'M8.L4',
            lessonNumber: 32,
            title: 'Presentasi Project Akhir',
            url: 'https://docs.google.com/document/d/1rRqafDFCU2pcqA5x49aujGIpx1ry1wEj5fMSh34Ofh8/edit',
            materi: 'Mempresentasikan game akhir Sang Ksatria di depan orang tua dan kelas.',
            tools: 'Aplikasi Scratch Jr',
            tujuan: ['dapat membuat permainan sesuai alur cerita sendiri', 'dapat memprogram sprite untuk keberhasilan penyelesaian']
          }
        ]
      }
    ]
  },

  // 2. DIGITAL LITERACY
  {
    id: 'digital-literacy',
    slug: 'digital-literacy',
    number: 2,
    title: 'Digital Literacy',
    category: 'design_ai',
    categoryName: 'Literasi Digital & AI',
    badgeColor: 'border-pink-400 bg-pink-50 text-pink-600',
    bgLight: 'bg-pink-50/50',
    textColor: 'text-pink-600',
    ageRange: 'Usia 7 Tahun',
    minAge: 7,
    maxAge: 7,
    duration: '36 Pertemuan (60-90 Menit)',
    classSize: 'Private, Premium (4 Murid) & Grup (7-10 Murid)',
    difficulty: 'Pemula - Menengah',
    language: 'English / Indonesia',
    shortDescription: 'Membekali anak dengan keterampilan esensial untuk menjadi warga digital yang cerdas dan aman, dari navigasi internet hingga pembuatan dokumen & AI.',
    fullDescription: 'Anak-anak melangkah ke dunia digital yang lebih luas. Mereka belajar menggunakan teknologi secara bijak dan aman, sambil mengembangkan keterampilan komunikasi digital penting seperti presentasi, infografis, dan komik digital.',
    tools: ['Scratch', 'Google Suite (Docs, Sheets, Slides)', 'Google Drive', 'Pixilart', 'AutoDraw', 'Paint.sumo', 'WPS Writer', 'ChatGPT', 'Runway'],
    finalProject: {
      title: 'Buku Komik Animasi Digital',
      subtitle: 'Komik Interaktif Beranimasi',
      description: 'Sebagai puncak perjalanan kreatif, siswa membuat buku komik digital mereka sendiri. Menggabungkan perancangan karakter, pembersihan latar gambar, penyusunan adegan di Google Slides, dan penambahan animasi.'
    },
    outcomes: [
      'Keterampilan Teknis Fundamental: Mengelola file, folder, dan cloud storage',
      'Kreativitas Digital: Seni piksel, animasi GIF, dan ilustrasi vektor',
      'Komunikasi Visual: Merancang presentasi menarik dan infografis informatif',
      'Logika & Analisis Data: Menggunakan spreadsheet untuk perhitungan dasar',
      'Pengenalan AI: Berinteraksi dengan AI generatif untuk teks dan gambar',
      'Keamanan Digital: Memahami privasi dan etika online'
    ],
    primaryFunctions: [
      'Menggunakan teknologi secara bijak, aman, dan bertanggung jawab',
      'Mengembangkan keterampilan komunikasi digital yang efektif',
      'Membangun kepercayaan diri untuk berkreasi di dunia digital'
    ],
    projects: [
      {
        id: 'dl-p1',
        title: 'Project 1.1 & 1.2: Dasar Informasi',
        author: 'Siswa Digital Literacy',
        type: 'drive',
        link: 'https://drive.google.com/file/d/1MradnCnx8QMbcHay0rPJEWQV2oe6jtD7/view?usp=drive_link',
        description: 'Penyusunan sistem informasi pertama dan pengenalan file komputer.'
      },
      {
        id: 'dl-p2',
        title: 'Project 2.1: Menggambar Digital',
        author: 'Siswa Digital Literacy',
        type: 'drive',
        link: 'https://drive.google.com/file/d/1t5CGDDAsGOqoBjAUB6B9iTHY7is_P-Il/view?usp=drive_link',
        description: 'Latihan seni piksel dan karya gambar digital multilayer.'
      },
      {
        id: 'dl-p3',
        title: 'Project 3.1: Keamanan Online',
        author: 'Siswa Digital Literacy',
        type: 'drive',
        link: 'https://drive.google.com/file/d/1BbrxypM8S2Ks0k1rehWY8EzQK1pXlzKg/view?usp=drive_link',
        description: 'Membuat aturan keamanan dan poster internet aman.'
      },
      {
        id: 'dl-p4',
        title: 'Project 5.1: Presentasi Interaktif',
        author: 'Siswa Digital Literacy',
        type: 'drive',
        link: 'https://drive.google.com/file/d/1D0n8J4NThbw06-_EScKLX-FRl0aSygOm/view?usp=drive_link',
        description: 'Presentasi Google Slides interaktif karya mandiri siswa.'
      }
    ],
    modules: [
      {
        id: 'dl-m1',
        title: 'Modul 1: Start Digital (Mouse, Keyboard & Sistem Berkas)',
        lessons: [
          {
            id: 'DL-M1-L1',
            lessonNumber: 1,
            title: 'Langkah pertama: Mengenal komputer',
            url: 'https://docs.google.com/document/d/19lDCMHJ7AX6YwBc4r3uT8e9zx0oJ9qWBsV9U17hffk4/edit',
            alurCerita: 'Robot Bit kehilangan temannya Codey di dunia digital! Kita perlu belajar mengendalikan komputer dengan mouse.',
            hasilBelajar: 'Berkenalan dengan komponen internal dan eksternal komputer. Menguasai klik tunggal dan ganda.'
          },
          {
            id: 'DL-M1-L2',
            lessonNumber: 2,
            title: 'Cetak, hapus, salin',
            url: 'https://docs.google.com/document/d/1xY2yvUYNiwSH9_FzWjnvvmvYIRZjjCDe0RzHW4RfO3M/edit',
            alurCerita: 'Bit menemukan Digital Archive yang dinonaktifkan. Perlu kata sandi dari keyboard.',
            hasilBelajar: 'Mengenal penempatan tangan di keyboard, tombol Spasi/Backspace/Enter, serta copy-paste.'
          },
          {
            id: 'DL-M1-L3',
            lessonNumber: 3,
            title: 'Observatorium digital',
            url: 'https://docs.google.com/document/d/1C9HmA7IX77rdlT9nkR2SEX5sOFhJc5GUIL1EF40mSqY/edit',
            alurCerita: 'Memperbaiki komputer observatorium Searcher.',
            hasilBelajar: 'Peralihan tab browser, papan tulis interaktif, dan latihan mengetik baris atas.'
          },
          {
            id: 'DL-M1-L4',
            lessonNumber: 4,
            title: 'Penyelamatan hewan mekanik',
            url: 'https://docs.google.com/document/d/1ijTGLJWA8clqpJ6VUKl0MWcNsmXvMuJB5Pw8PwhAMnY/edit',
            alurCerita: 'Basis data hewan robot terhapus! Bit harus membantu.',
            hasilBelajar: 'Keterampilan drag-and-drop dan menambahkan teks ke papan interaktif.'
          },
          {
            id: 'DL-M1-L5',
            lessonNumber: 5,
            title: 'Kota digital (File & Folder)',
            url: 'https://docs.google.com/document/d/14Hw6STSVzu9rJUuXs2w8sEnLmHuY3KMNgjWtfJ07uf4/edit',
            alurCerita: 'Codey meminta Bit belajar mengatur file dan folder secara teratur.',
            hasilBelajar: 'Memahami jenis file, ikon file, dan pembuatan folder teratur.'
          },
          {
            id: 'DL-M1-L6',
            lessonNumber: 6,
            title: 'Lokakarya teknis',
            url: 'https://docs.google.com/document/d/1zENVCnHcn5M2CH3zwn7fCYk3H9N6BKhRs8x4rnYQe4Y/edit',
            alurCerita: 'Membantu Bengkel Robot dengan manajemen file sistem.',
            hasilBelajar: 'Menu konteks: Copy, Cut, Paste, Rename, Delete, serta perbedaan menyalin vs memindahkan.'
          }
        ]
      },
      {
        id: 'dl-m2',
        title: 'Modul 2: Editor Grafis (Paint & Layer)',
        lessons: [
          {
            id: 'DL-M2-L1',
            lessonNumber: 7,
            title: 'Lokakarya Seni Pixel',
            url: 'https://docs.google.com/document/d/1MQfv1eD7268YxhOnZoN2vHTfz-shuz0qDkZUPMOmIc8/edit',
            alurCerita: 'Pixel mengajarkan 3 alat gambar dasar untuk membuat mobil.',
            hasilBelajar: 'Antarmuka Paint.sumo.app, kuas, bentuk geometri, dan fill/outline.'
          },
          {
            id: 'DL-M2-L2',
            lessonNumber: 8,
            title: 'Alat gambar ajaib',
            url: 'https://docs.google.com/document/d/1DKWIvS-q33ZFGwpIqbjdj1LUoESgeIxKX7osXOpLQo0/edit',
            alurCerita: 'Teknik fill dan pembulatan bentuk rahasia.',
            hasilBelajar: 'Pewarnaan area luas, pengaturan stroke/pembulatan, gambar kompleks.'
          },
          {
            id: 'DL-M2-L3',
            lessonNumber: 9,
            title: 'Lapisan Seperti Kertas Ajaib (Layers)',
            url: 'https://docs.google.com/document/d/1Xts_CejhSgFrxuwFS6k4z3vuV7DmvQJi0TsCYWMWqQk/edit',
            alurCerita: 'Seni sejati bekerja dengan beberapa layer kertas digital.',
            hasilBelajar: 'Konsep layer, penggantian nama, visibilitas, dan urutan layer.'
          },
          {
            id: 'DL-M2-L4',
            lessonNumber: 10,
            title: 'Proyek «Peta Rahasia Pixel»',
            url: 'https://docs.google.com/document/d/1xSK2iLlPsDht9HfU_FppflWEYBqDu3LuWmXUNl7DBoo/edit',
            alurCerita: 'Membuat peta tempat kenangan perjalanan digital.',
            hasilBelajar: 'Pengerjaan file multilayer dan penggabungan gambar kenangan.'
          }
        ]
      },
      {
        id: 'dl-m3',
        title: 'Modul 3: Bekerja dengan Teks (WPS Writer & Tabel)',
        lessons: [
          {
            id: 'DL-M3-L1',
            lessonNumber: 11,
            title: 'Membuat pass ke server',
            url: 'https://docs.google.com/document/d/1o1RcMY2i4P34TXyYAeQeSO8K3-hAvhhLivNMv8oGG_4/edit',
            alurCerita: 'Codey terjebak di server! Perlu tiket akses teks profesional.',
            hasilBelajar: 'Pemformatan teks (tebal, miring, ukuran), perataan, warna, dan bullet/numbering.'
          },
          {
            id: 'DL-M3-L2',
            lessonNumber: 12,
            title: 'Penyelamatan server dari virus',
            url: 'https://docs.google.com/document/d/13DnvYFyA1mWvYSnYgHVpSf0vwNuDkG_zHrZKC3rZKYo/edit',
            alurCerita: 'Pesan SOS virus menyerang server!',
            hasilBelajar: 'Pencarian (Ctrl+F) & penggantian teks (Ctrl+H), penyisipan gambar & text wrapping.'
          },
          {
            id: 'DL-M3-L3',
            lessonNumber: 13,
            title: 'Operasi Antivirus dengan Tabel',
            url: 'https://docs.google.com/document/d/1QEiovNsi1l5ub37sTv2TxeuFyqDrH1AB7bqJvtgqhJA/edit',
            alurCerita: 'Membuat tiga benteng sistem pertahanan dengan tabel.',
            hasilBelajar: 'Membuat & memformat tabel di WPS Writer, mengisi, menggabungkan sel, dan menyisipkan gambar.'
          },
          {
            id: 'DL-M3-L4',
            lessonNumber: 14,
            title: 'Proyek «Cerita Hewan Peliharaan Hebatku»',
            url: 'https://docs.google.com/document/d/1kbUi6e4unb5Z9Lw73qd-V81kl46GVMbYJS9W0rYIQTU/edit',
            alurCerita: 'Membuat paspor khusus robot pembantu unik.',
            hasilBelajar: 'Menggabungkan teks, tabel, gambar, dan visualisasi data dalam satu dokumen.'
          }
        ]
      },
      {
        id: 'dl-m4',
        title: 'Modul 4: Presentasi & Interaktivitas (Slides)',
        lessons: [
          {
            id: 'DL-M4-L1',
            lessonNumber: 15,
            title: 'Pembukaan Studio Super Games',
            url: 'https://docs.google.com/document/d/1wsmWpk7Oeul96R-h3HLsny5N4DSF9gzPmM5KPdMLrZ8/edit',
            alurCerita: 'Memperbaiki presentasi pembukaan studio game.',
            hasilBelajar: 'Manajemen slide (tambah, hapus, susun ulang, duplikat) dan pemformatan teks.'
          },
          {
            id: 'DL-M4-L2',
            lessonNumber: 16,
            title: 'Presentasi game RoboWorld',
            url: 'https://docs.google.com/document/d/15wCDelsMuchRKAksIfBXxM1-nbvmRilssGzGexB7b6c/edit',
            alurCerita: 'Membuat presentasi interaktif berpindah antar level.',
            hasilBelajar: 'Hyperlink antar slide dan tombol navigasi interaktif.'
          }
        ]
      }
    ]
  },

  // 3. VISUAL PROGRAMMING
  {
    id: 'visual-programming',
    slug: 'visual-programming',
    number: 3,
    title: 'Visual Programming',
    category: 'coding',
    categoryName: 'Coding & Algoritma',
    badgeColor: 'border-blue-500 bg-blue-50 text-blue-600',
    bgLight: 'bg-blue-50/50',
    textColor: 'text-blue-600',
    ageRange: 'Usia 8–11 Tahun',
    minAge: 8,
    maxAge: 11,
    duration: '36 Pertemuan (60-90 Menit)',
    classSize: 'Private, Premium (4 Murid) & Grup (7-10 Murid)',
    difficulty: 'Pemula - Menengah',
    language: 'English / Indonesia',
    shortDescription: 'Dari penikmat game menjadi pencipta game! Menggunakan platform Scratch & AlgoNova, anak akan belajar konsep coding untuk merancang animasi & game.',
    fullDescription: 'Dengan fondasi yang kuat, anak-anak mendalami pemrograman visual berbasis blok di Scratch. Mereka mengaplikasikan konsep-konsep coding melalui proyek yang lebih kompleks: Bot Mars, laser plant, roket koordinat, dan game retro.',
    tools: ['Scratch 3.0', 'AlgoNova Platform', 'Google Docs', 'Buku Latihan Digital'],
    finalProject: {
      title: 'Game Pilihan Siswa',
      subtitle: 'Game Interaktif Karya Mandiri',
      description: 'Sebagai proyek kelulusan, setiap siswa menyelesaikan dan memoles game pilihan mereka sendiri. Melakukan debugging akhir, memastikan mekanik permainan berjalan lancar, dan mempresentasikannya.'
    },
    outcomes: [
      'Logika Pemrograman Fundamental: Algoritme, loops, kondisi (if-then), dan operator logika (AND, OR)',
      'Struktur Kode Lanjutan: Prosedur (fungsi kustom), variabel (global & lokal), dan klon (kloning objek)',
      'Game Development di Scratch: Kontrol karakter, sistem skor, level, dan kondisi menang/kalah',
      'Matematika Terapan: Koordinat X-Y, derajat rotasi, dan angka acak (RNG)',
      'Manajemen Proyek & Testing: Merencanakan dari mind map, testing, debugging, dan presentasi'
    ],
    primaryFunctions: [
      'Memecah masalah kompleks menjadi langkah-langkah yang lebih kecil dan logis',
      'Merancang solusi kreatif dan sistematis untuk tantangan komputasi',
      'Mengubah ide abstrak menjadi karya digital interaktif yang dapat dibagikan'
    ],
    projects: [
      {
        id: 'vp-p1',
        lesson: 8,
        title: 'Pertandingan Sepak Bola Kartun',
        author: 'Rafael',
        age: 10,
        type: 'web',
        link: 'https://learn.algonova.id/community?category=new&filter=projects&projectId=46856463&page=1',
        description: 'Saksikan keseruan tim biru melawan tim merah! Klik bendera hijau untuk masuk ke dunia sepak bola kartun.'
      },
      {
        id: 'vp-p2',
        lesson: 16,
        title: 'Animal Dash - Multiplayer',
        author: 'Evelyn',
        age: 9,
        type: 'web',
        link: 'https://learn.algonova.id/community?category=new&filter=projects&projectId=46856481&page=1',
        description: 'Kendalikan avatar hewanmu dengan W-A-S-D atau tombol panah dan adu cepat ke garis finish!'
      },
      {
        id: 'vp-p3',
        lesson: 24,
        title: 'Ball Dodger',
        author: 'Rafael',
        age: 10,
        type: 'web',
        link: 'https://learn.algonova.id/community?category=new&filter=projects&projectId=46856541&page=1',
        description: 'Petualangan melewati rintangan, laser, dan bola-bola berputar tanpa terluka.'
      },
      {
        id: 'vp-p4',
        lesson: 32,
        title: 'RetroSnake Classic',
        author: 'Kenzo',
        age: 8,
        type: 'web',
        link: 'https://learn.algonova.id/community?category=new&filter=projects&projectId=46615247&page=1',
        description: 'Game ular klasik Nokia buatan sendiri di Scratch. Makan apel agar ular makin panjang!'
      }
    ],
    modules: [
      {
        id: 'vp-m1',
        title: 'Modul 1: Perkenalan & Algoritma Linear Bot Mars',
        lessons: [
          {
            id: 'VP-M1-L1',
            lessonNumber: 1,
            title: 'Pengenalan Algoritme Linear',
            url: 'https://docs.google.com/document/d/17IxPDHNpfh82YHi5yUGKWyTB8JXQVQD1D24Shg8kn1M/edit',
            materi: 'Algoritme linear untuk membawa Bot Mars menuju target serta berkenalan dengan script, sprite, & stage.',
            tujuan: ['Menguasai konsep algoritme linear', 'Mengenal antarmuka Scratch & platform tugas']
          },
          {
            id: 'VP-M1-L2',
            lessonNumber: 2,
            title: 'Loops (Pengulangan)',
            url: 'https://docs.google.com/document/d/1lKG3qgYk8HLqrV7eBwVah7tfeay-LAM7gZ5ZTyrmNBI/edit',
            materi: 'Bot Mars mendirikan kamp ekspedisi. Membuat perulangan terbatas dan tak terbatas.',
            tujuan: ['Menguasai algoritme perulangan', 'Mengotomatisasi tugas rutin']
          },
          {
            id: 'VP-M1-L3',
            lessonNumber: 3,
            title: 'Penempatan awal',
            url: 'https://docs.google.com/document/d/19rnz2onffUN-x_iS-t_APOoIzrocE110umfNiPEdJuc/edit',
            materi: 'Mengatur parameter awal penampilan sprite dan menulis rencana proyek.',
            tujuan: ['Mengatur koordinat & tampilan awal sprite', 'Menulis rencana proyek mini']
          },
          {
            id: 'VP-M1-L4',
            lessonNumber: 4,
            title: 'Events',
            url: 'https://docs.google.com/document/d/11v_VIu6F-nbg0Wj9efug1TyzMVqRSZeY_AXUvSP8_-w/edit',
            materi: 'Memprogram beberapa skrip yang dipicu oleh event berbeda pada satu sprite.',
            tujuan: ['Paham definisi event', 'Mengelola script dengan perintah stop']
          },
          {
            id: 'VP-M1-L5',
            lessonNumber: 5,
            title: 'Project Kartu Nama di Scratch',
            url: 'https://docs.google.com/document/d/1gK4ucupRIJVdKtsnW6eYVhqMVOfoDbqJ8GwK3pOLYT4/edit',
            materi: 'Kapten Kepler meminta kartu nama proyek interaktif buatan sendiri.',
            tujuan: ['Mengaplikasikan algoritme, loops, dan events dalam satu kartu nama interaktif']
          }
        ]
      },
      {
        id: 'vp-m2',
        title: 'Modul 2: Angkasa & Koordinat X-Y',
        lessons: [
          {
            id: 'VP-M2-L1',
            lessonNumber: 6,
            title: 'Koordinat',
            url: 'https://docs.google.com/document/d/1LKbnjBes_M784iRvwNzkyzpqi-qyS7n0ZHTxtPp6e8A/edit',
            materi: 'Sumbu X dan Y, mendaratkan roket di titik tertentu pada peta Mars.',
            tujuan: ['Mengatur posisi sprite dengan sumbu X & Y', 'Menyelesaikan tantangan koordinat']
          },
          {
            id: 'VP-M2-L2',
            lessonNumber: 7,
            title: 'Mengarah kearah (Point in Direction)',
            url: 'https://docs.google.com/document/d/1Xyvt_AymXbH6TdU72lhX_5V7eaWUxNREvUzSH3SqlCI/edit',
            materi: 'Mengatur arah yang ditunjuk oleh sprite Bot Mars.',
            tujuan: ['Mengatur sudut & arah gerakan sprite']
          },
          {
            id: 'VP-M2-L3',
            lessonNumber: 8,
            title: 'Belok dan Derajat',
            url: 'https://docs.google.com/document/d/1nvJsS8dcrgy2w2Ch3EMUK6IAdSynOetcS8j6Qoi2Omk/edit',
            materi: 'Sistem laser tanaman berbahaya di rumah kaca dengan derajat rotasi.',
            tujuan: ['Memahami rotasi derajat dan perbedaan berbelok vs mengarah']
          },
          {
            id: 'VP-M2-L4',
            lessonNumber: 9,
            title: 'Pesan (Broadcast Messages)',
            url: 'https://docs.google.com/document/d/1lX2iCrocyFXN5QnfhzPv8QxRvh3Aex5rs7iXnq-ttGc/edit',
            materi: 'Komunikasi antar sprite dan transisi level menggunakan pesan.',
            tujuan: ['Memprogram sinyal broadcast antar sprite & pergantian level']
          },
          {
            id: 'VP-M2-L5',
            lessonNumber: 10,
            title: 'Project Animasi Angkasa',
            url: 'https://docs.google.com/document/d/106HTnfbW9iCfO0yrCqdgj4mwOH_FsNTKmL6o4KdCzO4/edit',
            materi: 'Membuat animasi unik petualangan Bot Mars dan mempresentasikannya.',
            tujuan: ['Membuat animasi mandiri dan presentasi']
          }
        ]
      },
      {
        id: 'vp-m3',
        title: 'Modul 3: Logika Game & Prosedur',
        lessons: [
          {
            id: 'VP-M3-L1',
            lessonNumber: 11,
            title: 'Kondisi dan operator seleksi',
            url: 'https://docs.google.com/document/d/1qleVtMRXpRNeWAUz1hqVS1WVYrNO2QnQ_A8FnLLR8r8/edit',
            materi: 'Operator seleksi if-then dan penyortiran kargo di Mars.',
            tujuan: ['Memprogram keputusan dengan operator seleksi']
          },
          {
            id: 'VP-M3-L2',
            lessonNumber: 12,
            title: 'Mengubah Koordinat Relatif',
            url: 'https://docs.google.com/document/d/1pJYbmY6_Xjmt50kTRWyb4JnjPQxhsdI_5lpSZOgow4o/edit',
            materi: 'Kontrol sprite dengan mengubah nilai X dan Y saat tombol keyboard ditekan.',
            tujuan: ['Memprogram pergerakan karakter yang halus dengan keyboard']
          },
          {
            id: 'VP-M3-L3',
            lessonNumber: 13,
            title: 'Prosedur (Make a Block / Fungsi)',
            url: 'http://docs.google.com/document/d/1Q6LUy0lbZJRx88L41Ia8rFDc_55riucxY9wG0-Ns4ME/edit',
            materi: 'Membuat blok perintah baru sendiri untuk merapikan kode yang panjang.',
            tujuan: ['Membuat dan memanggil prosedur kustom']
          }
        ]
      }
    ]
  },

  // 4. GAME DESIGN (ROBLOX)
  {
    id: 'game-design-roblox',
    slug: 'game-design-roblox',
    number: 4,
    title: 'Game Design (Roblox)',
    category: 'coding',
    categoryName: 'Coding & Game Dev',
    badgeColor: 'border-yellow-400 bg-yellow-50 text-yellow-600',
    bgLight: 'bg-yellow-50/50',
    textColor: 'text-amber-600',
    ageRange: 'Usia 10–14 Tahun',
    minAge: 10,
    maxAge: 14,
    duration: '32 Pertemuan (60-90 Menit)',
    classSize: 'Private, Premium (4 Murid) & Grup (7-10 Murid)',
    difficulty: 'Menengah - Sulit',
    language: 'English / Indonesia',
    shortDescription: 'Wujudkan ide game 3D impian menjadi kenyataan. Menggunakan Roblox Studio, siswa belajar desain level 3D, scripting Lua, dan mekanik multiplayer.',
    fullDescription: 'Ubah anak dari konsumen game menjadi kreator dunia 3D interaktif! Siswa mempelajari dasar-dasar Roblox Studio, kustomisasi terrain, lighting, GUI, scripting bahasa Lua, hingga mempublikasikan game ciptaan mereka ke jutaan pemain Roblox.',
    tools: ['Roblox Studio', 'Lua Scripting', 'Canva', 'YouTube Screencast'],
    finalProject: {
      title: 'King of the Hill Multiplayer',
      subtitle: 'Game Multiplayer Perebutan Wilayah',
      description: 'Siswa merancang dan mengembangkan game multiplayer "King of the Hill" versi mereka sendiri. Membangun arena, skrip perebutan wilayah, leaderboard skor, dan UI kustom.'
    },
    outcomes: [
      'Keahlian Desain Dunia 3D: Pembangunan lanskap 3D imersif & pemodelan bangunan',
      'Dasar Pemrograman Lua: Menulis skrip untuk interaksi objek, event, dan logika',
      'Desain Mekanik Game: Platformer, RPG, Shooter, Racing Simulator, Arcade',
      'Pengembangan Game Multiplayer: Logika server-client, leaderboard, dan tim',
      'Desain UI/UX Roblox: ScreenGui, SurfaceGui, health bar, dan menu kustom'
    ],
    primaryFunctions: [
      'Berpikir secara sistematis untuk memecahkan masalah desain 3D kompleks',
      'Mengelola proyek game dari konsep awal hingga produk akhir dipublikasikan',
      'Mengubah imajinasi menjadi pengalaman digital 3D yang nyata dan menyenangkan'
    ],
    projects: [
      {
        id: 'rbx-p1',
        lesson: 8,
        title: 'Adventure Leap Platformer',
        author: 'Prince',
        age: 7,
        type: 'roblox',
        link: 'https://www.roblox.com/games/13737585818/',
        description: 'Loncat, berlari, dan lewati rintangan-rintangan menantang di dunia platformer 3D untuk mengumpulkan peti harta.'
      },
      {
        id: 'rbx-p2',
        lesson: 16,
        title: "Demon's Wrath RPG Survival",
        author: 'Kevin',
        age: 13,
        type: 'roblox',
        link: 'https://www.roblox.com/games/13737622344/',
        description: 'Dunia RPG Survival! Hadapi iblis tangguh, kumpulkan koin, dan naikkan level karaktermu.'
      },
      {
        id: 'rbx-p3',
        lesson: 24,
        title: 'RumbleZone: Multiplayer FPS',
        author: 'Eloise',
        age: 11,
        type: 'roblox',
        link: 'https://www.roblox.com/games/13737644068/',
        description: 'Arena pertarungan multiplayer FPS! Kalahkan musuh sebanyak-banyaknya untuk menempati posisi puncak leaderboard.'
      },
      {
        id: 'rbx-p4',
        lesson: 32,
        title: 'Velocity Rush - Car Racing',
        author: 'Gabrian',
        age: 12,
        type: 'roblox',
        link: 'https://www.roblox.com/games/13737654483/',
        description: 'Pembalapan mobil kecepatan tinggi dengan sistem waktu dan kendaraan buatan sendiri.'
      }
    ],
    modules: [
      {
        id: 'rbx-m1',
        title: 'Modul 1: Dunia Tempat Saya Tinggal (Dasar 3D & Scripting)',
        lessons: [
          {
            id: 'RBX-M1-L1',
            lessonNumber: 1,
            title: 'Roblox.com vs Roblox Studio',
            url: 'https://docs.google.com/document/d/16VRevOtFg_7YbkeUCXIfwYLlgl4Fh5UxcVGc7z105FY/edit',
            materi: 'Navigasi antarmuka Roblox Studio, part, model, dan peran desainer game.',
            tujuan: ['Dapat menavigasi Roblox Studio', 'Memahami part dan model']
          },
          {
            id: 'RBX-M1-L2',
            lessonNumber: 2,
            title: 'Game 3D Pertama Saya',
            url: 'https://docs.google.com/document/d/1_8J2PGgQzSyJnJ2K-ln_8BQkWWTSWqH-BMdwzmaOPoA/edit',
            materi: 'Properti Anchor, sistem koordinat 3D, dan game Obby/Platformer pertama.',
            tujuan: ['Menggunakan alat Move, Scale, Rotate & Anchor']
          },
          {
            id: 'RBX-M1-L3',
            lessonNumber: 3,
            title: 'Menciptakan Game untuk E-Atlet Profesional',
            url: 'https://docs.google.com/document/d/1sXCkHTwglkByqjKKwLSn3HbCco8gAc2Cpg3wzzmpUd4/edit',
            materi: 'Penggunaan HingeConstraint dan Motor untuk platform berputar.',
            tujuan: ['Menggunakan Constraint & Collision']
          },
          {
            id: 'RBX-M1-L4',
            lessonNumber: 4,
            title: 'Meningkatkan Game Platformer Kita',
            url: 'https://docs.google.com/document/d/11_rmsKetKZtTyuUS4aaSbwjMIM02xJOjcCELAvRxSpE/edit',
            materi: 'SpawnLocation, Checkpoint, dan publikasi game ke Roblox.',
            tujuan: ['Membuat Spawn & mempublikasikan game']
          },
          {
            id: 'RBX-M1-L5',
            lessonNumber: 5,
            title: 'Memperluas Fungsionalitas Game Menggunakan Skrip',
            url: 'https://docs.google.com/document/d/1RpR2iWIlDxRRLmsOSqhEf4Uy3NkVZgBEkD8pbT_5aXM/edit',
            materi: 'Skrip Lua dasar: mengubah warna, transparansi, dan efek saat tersentuh.',
            tujuan: ['Menulis skrip Lua sederhana']
          },
          {
            id: 'RBX-M1-L6',
            lessonNumber: 6,
            title: 'Membangun Dunia Anda Sendiri: Lanskap dan Tanaman',
            url: 'https://docs.google.com/document/d/1Ng1hhwDUxHQmAlUuj32-SryYeegVnoE_w4udhxMg71o/edit',
            materi: 'Penggunaan Terrain Editor: gunung, air, pohon, dan pengelompokan model.',
            tujuan: ['Menggunakan Terrain Editor untuk alam 3D']
          },
          {
            id: 'RBX-M1-L7',
            lessonNumber: 7,
            title: 'Menciptakan Dunia Anda Sendiri: Bangunan',
            url: 'https://docs.google.com/document/d/1A_kFV7IcFlBIb2uzrcIkcrzi_PlpFOhbhnckZdUAfT8/edit',
            materi: 'Solid Modeling (Negate & Union) untuk membuat pintu/jendela dan siklus siang-malam.',
            tujuan: ['Menggunakan Union & Negate dan Lighting']
          }
        ]
      },
      {
        id: 'rbx-m2',
        title: 'Modul 2: Game Quest & RPG',
        lessons: [
          {
            id: 'RBX-M2-L1',
            lessonNumber: 11,
            title: 'Apa itu Desain Game?',
            url: 'https://docs.google.com/document/d/1qWkibK8wJKDT9vGSVqWXd4VnVIWn619LUlsozoYB8e8/edit',
            materi: 'Dokumen desain game (GDD) dan SurfaceGui untuk papan informasi.',
            tujuan: ['Membuat Game Design Document & SurfaceGui']
          },
          {
            id: 'RBX-M2-L2',
            lessonNumber: 12,
            title: 'Menambahkan Chatbot ke dalam Game',
            url: 'https://docs.google.com/document/d/1uyE1MtjO4U58py0CAaQ1mlPiThB-lAr_GLgKAMoomkg/edit',
            materi: 'Sistem dialog bercabang dengan NPC menggunakan Dialog & DialogChoice.',
            tujuan: ['Membuat percakapan NPC interaktif']
          },
          {
            id: 'RBX-M2-L3',
            lessonNumber: 13,
            title: 'Desain Sistem dan Transisi antar Level',
            url: 'https://docs.google.com/document/d/1m8_sIL-ZWOhJdGul7r6GotEd10kM2Qi447mGy0qXEAQ/edit',
            materi: 'Peran level desainer dan skrip teleportasi antar tempat.',
            tujuan: ['Memprogram sistem teleportasi antar level']
          }
        ]
      }
    ]
  },

  // 5. GRAPHIC DESIGN
  {
    id: 'graphic-design',
    slug: 'graphic-design',
    number: 5,
    title: 'Graphic Design',
    category: 'design_ai',
    categoryName: 'Desain & Kreatif',
    badgeColor: 'border-violet-500 bg-violet-50 text-violet-600',
    bgLight: 'bg-violet-50/50',
    textColor: 'text-purple-700',
    ageRange: 'Usia 9–14 Tahun',
    minAge: 9,
    maxAge: 14,
    duration: '79 Pertemuan (Junior 39 Lesson / Senior 40 Lesson)',
    classSize: 'Private, Premium (4 Murid) & Grup (7-10 Murid)',
    difficulty: 'Menengah - Sulit',
    language: 'English / Indonesia',
    shortDescription: 'Ubah imajinasi anak menjadi karya visual memukau. Dengan Photopea, Figma, Canva, TinkerCAD, Wick Editor, CapCut Web, dan AI Tools, siswa membuat ilustrasi, model 3D, hingga animasi.',
    fullDescription: 'Perkenalan komprehensif dengan dunia desain profesional: grafik raster, ilustrasi vektor, UI/UX, tata letak, pemodelan 3D, animasi gerak, video editing, dan kreasi AI.',
    tools: ['Photopea', 'Figma', 'Canva', 'TinkerCAD', 'Wick Editor', 'CapCut Web', 'AI Tools'],
    finalProject: {
      title: 'Website Portofolio Digital Profesional',
      subtitle: 'Galeri Karya & Identitas Merek',
      description: 'Junior (Lesson 39): Portofolio galeri online karya desain terbaik. Senior (Lesson 40): Website Kartu Nama Profesional lengkap dengan identitas brand pribadi dan profil desainer.'
    },
    outcomes: [
      'Ilustrasi Raster & Vektor: Menguasai Photopea, Figma & Canva (layer, retouching, ikon, UI/UX)',
      'Model 3D & Ruang Spasial: TinkerCAD (primitive, hole, Scribble, tata letak 3D)',
      'Desain Gerak & Video Editing: Wick Editor & CapCut Web (animation & video creation)',
      'Teknologi Masa Depan: Pemanfaatan AI Tools untuk kreasi visual & desain kreatif',
      'Brand Identity & Web Portfolio: Logo, identitas merek, dan publikasi portofolio digital'
    ],
    primaryFunctions: [
      'Mengubah siswa dari konsumen media menjadi kreator konten visual profesional',
      'Mengembangkan kecerdasan spasial, estetika warna, dan komposisi',
      'Membangun portofolio digital nyata sebagai bekal masa depan'
    ],
    projects: [
      {
        id: 'gd-p1',
        lesson: 8,
        title: 'Dance Vector',
        author: 'Nayfa',
        age: 13,
        type: 'drive',
        link: 'https://drive.google.com/file/d/1DMpoarAwMImdddzZe827Po3o8OFJUqie/view?usp=drive_link',
        description: 'Gambar tari dengan siluet dan garis-garis estetik menggunakan dua warna solid.'
      },
      {
        id: 'gd-p2',
        lesson: 16,
        title: 'Dog Birthday Fun',
        author: 'Naswa',
        age: 11,
        type: 'drive',
        link: 'https://drive.google.com/file/d/1LobSMpWnJoy2bsAts1a7xxYTs2WfTabJ/view?usp=drive_link',
        description: '4 ilustrasi anjing dengan elemen ulang tahun, topi, balon, dan confetti.'
      },
      {
        id: 'gd-p3',
        lesson: 30,
        title: 'Bright Colorful Typography',
        author: 'Naura',
        age: 9,
        type: 'drive',
        link: 'https://drive.google.com/file/d/1gtWGNQiqCpESUxKmGNNE6uCrjzfMutsr/view?usp=drive_link',
        description: 'Komposisi kata-kata ekspresif seperti "OMG", "OOPS", "POOF" dalam tipografi warna cerah.'
      },
      {
        id: 'gd-p4',
        lesson: 32,
        title: 'Buzz Lightyear Vector',
        author: 'Galuh',
        age: 10,
        type: 'drive',
        link: 'https://drive.google.com/file/d/1AizPvdU2-jw40RPIEnHlBGm7nAPHWJO_/view?usp=drive_link',
        description: 'Vektor kartun favorit Buzz Lightyear dibuat secara mandiri.'
      }
    ],
    modules: [
      {
        id: 'gd-m1',
        title: 'Modul 1: Grafik Raster (GIMP)',
        lessons: [
          {
            id: 'GD-L1',
            lessonNumber: 1,
            title: 'Titik, Garis, Pola',
            url: 'https://docs.google.com/document/d/13DbFNnpnXZGsnCBJtj07BbILn0TcMUIIHuw9ou06VK4/edit',
            materi: 'Penggunaan Brush di editor GIMP untuk membuat pola desain dasar.',
            tujuan: 'Mempelajari penggunaan alat Brush di editor raster GIMP untuk membuat pola.'
          },
          {
            id: 'GD-L2',
            lessonNumber: 2,
            title: 'Mengisi dengan Warna dan Tekstur',
            url: 'https://docs.google.com/document/d/13iWkd7KMSC9Bs2Q0rLDRpeivLZ4-_wxDPakNBPnWx80/edit',
            materi: 'Penggunaan tekstur, halftone, screentone, dan palet warna.',
            tujuan: 'Mempelajari penggunaan warna dan tekstur untuk mewarnai ilustrasi.'
          },
          {
            id: 'GD-L3',
            lessonNumber: 3,
            title: 'Ilustrasi Multilapis',
            url: 'https://docs.google.com/document/d/1Zs1HOdiH5W1Nb7Do-dLjh5NWvrp80nKC8JR71kOM6fo/edit',
            materi: 'Sketsa tangan ke digital, outline, dan lapisan terpisah.',
            tujuan: 'Mempelajari penggunaan lapisan untuk membuat desain fungsional.'
          }
        ]
      },
      {
        id: 'gd-m2',
        title: 'Modul 2: Grafik Vektor (Inkscape)',
        lessons: [
          {
            id: 'GD-L9',
            lessonNumber: 9,
            title: 'Berkenalan dengan Grafik Vektor',
            url: 'https://docs.google.com/document/d/1GYbIiky4-pD5AMF19pWidSfhYazvPeyQbKJi_87JvWg/edit',
            materi: 'Perbedaan vektor vs raster, objek Inkscape.',
            tujuan: 'Mempelajari cara membuat gambar vektor dari objek di Inkscape.'
          },
          {
            id: 'GD-L11',
            lessonNumber: 11,
            title: 'Potret Vektor & Kurva Bezier',
            url: 'https://docs.google.com/document/d/1FuaSIcg8ei1jwojCIZoyJPaoMLRYVAS_vkl4yhqzPk0/edit',
            materi: 'Menggambar potret vektor berdasarkan foto menggunakan Bezier Curves.',
            tujuan: 'Membuat gambar vektor berdasarkan foto menggunakan Bezier Curves.'
          }
        ]
      }
    ]
  },

  // 6. PYTHON START
  {
    id: 'python-start',
    slug: 'python-start',
    number: 6,
    title: 'Python Start',
    category: 'coding',
    categoryName: 'Coding & Teks',
    badgeColor: 'border-green-500 bg-green-50 text-green-600',
    bgLight: 'bg-green-50/50',
    textColor: 'text-green-700',
    ageRange: 'Usia 12–15 Tahun',
    minAge: 12,
    maxAge: 15,
    duration: '68 Pertemuan (Tahun ke-1 : 36 Lesson, Tahun ke-2 : 32 Lesson)',
    classSize: 'Private, Premium (4 Murid) & Grup (7-10 Murid)',
    difficulty: 'Menengah - Sulit',
    language: 'English / Indonesia',
    shortDescription: 'Gerbang menuju pemrograman profesional dengan Python. Dalam simulasi karir IT, siswa belajar coding berbasis teks yang paling dicari di dunia industri.',
    fullDescription: 'Mulailah karir sebagai developer Python dalam format gamifikasi yang seru! Dari trainee hingga lead developer, siswa menguasai variabel, struktur kontrol, fungsi, OOP, Pygame 2D, PyQt5 GUI, dan Git/GitHub.',
    tools: ['Python 3', 'VS Code (AlgoVSC)', 'Turtle Graphics', 'Pygame', 'PyQt5', 'Git & GitHub', 'Pyinstaller'],
    finalProject: {
      title: 'Hackathon Tim & Game 2D',
      subtitle: 'Pengembangan Game & Aplikasi Desktop',
      description: 'Tahun 1: Hackathon tim membangun game Arkanoid / Labirin. Tahun 2: Membangun aplikasi Smart Notes / Easy Editor dan game multiplayer Ping-Pong yang dipublikasikan di GitHub.'
    },
    outcomes: [
      'Dasar & Struktur Data Python: Tipe data, irisan string, list, dictionary, tuple, set, dan try-except',
      'Algoritma Lanjutan: Perulangan while/for, fungsi kustom (def & return), dan modul (random, time)',
      'Pemrograman Berorientasi Objek (OOP): Class, objek, atribut, metode, dan inheritance',
      'Game Development 2D: Pygame, game loop, sprite collision, shooting mechanics',
      'Aplikasi GUI Desktop: PyQt5 layout, widget, event handlers, dan packaging .exe dengan Pyinstaller'
    ],
    primaryFunctions: [
      'Membangun logika berpikir komputasional tingkat tinggi dengan bahasa pemrograman paling populer di dunia',
      'Memberikan pengalaman nyata simulasi industri IT (code review, hackathon, git commit)',
      'Menyiapkan portofolio aplikasi dan game nyata'
    ],
    projects: [
      {
        id: 'ps-p1',
        lesson: 8,
        title: 'Easy Cashier - Automated Food Cashier',
        author: 'Elyssa',
        age: 13,
        type: 'web',
        link: 'https://learn.algonova.id/community?category=new&filter=projects&projectId=46856527&page=1',
        description: 'Kasir otomatis makanan dan minuman yang menghitung total tagihan beserta kembalian secara presisi.'
      },
      {
        id: 'ps-p2',
        lesson: 16,
        title: 'Turbo Turtles - Python Turtle Racing',
        author: 'Jonathan',
        age: 13,
        type: 'web',
        link: 'https://learn.algonova.id/community?category=new&filter=projects&projectId=46856534&page=1',
        description: 'Balapan kura-kura berbasis modul Turtle dan fungsi acak randint.'
      },
      {
        id: 'ps-p3',
        lesson: 32,
        title: 'Arkanoid Python Game',
        author: 'Kinsey',
        age: 9,
        type: 'youtube',
        link: 'https://www.youtube.com/watch?v=l217G1lw-lE',
        description: 'Game Arkanoid klasik dibuat dengan Pygame: kendalikan paddle dan hancurkan semua balok!'
      },
      {
        id: 'ps-p4',
        title: 'Smart Notes PyQt5 App',
        author: 'Siswa Python Start Yr 2',
        type: 'drive',
        link: 'https://drive.google.com/file/d/1x8UzOxwv6p1zvm_T08Uvx7mDWo6crL0u/view?usp=sharing',
        description: 'Aplikasi pencatat pintar berfitur tag, pencarian, dan penyimpanan file JSON.'
      }
    ],
    modules: [
      {
        id: 'ps-m1',
        title: 'Modul 1: Tipe Data & Sintaks Python',
        lessons: [
          {
            id: 'PS-M1-L1',
            lessonNumber: 1,
            title: 'Pengenalan Bahasa Pemrograman Python',
            url: 'https://docs.google.com/document/d/1aJP8myLZ3DQSHT6dz7LqgAWEBKdytd7B_wNG_GjRZqI/edit',
            materi: 'Sintaks Python dasar, print(), dan operator aritmatika.',
            tujuan: 'Memahami konsep pemrograman dan sintaks dasar Python.'
          },
          {
            id: 'PS-M1-L2',
            lessonNumber: 2,
            title: 'Mengenal Variabel di dalam Python',
            url: 'https://docs.google.com/document/d/1qES1uaHSvcMQ7ldD-d5fhtGvzFEeAh7-2ByclAkjQRE/edit',
            materi: 'Variabel, input(), tipe data int, float, string, dan konversi tipe data.',
            tujuan: 'Memahami variabel dan konversi tipe data.'
          }
        ]
      }
    ]
  },

  // 7. PYTHON PRO
  {
    id: 'python-pro',
    slug: 'python-pro',
    number: 7,
    title: 'Python Pro',
    category: 'coding',
    categoryName: 'Advanced Coding & AI',
    badgeColor: 'border-green-600 bg-green-100 text-green-800',
    bgLight: 'bg-green-100/40',
    textColor: 'text-green-800',
    ageRange: 'Usia 16–17 Tahun',
    minAge: 16,
    maxAge: 17,
    duration: '64 Pertemuan (Tahun ke-1 : 32 Lesson, Tahun ke-2 : 32 Lesson)',
    classSize: 'Private, Premium (4 Murid) & Grup (7-10 Murid)',
    difficulty: 'Sulit',
    language: 'English / Indonesia',
    shortDescription: 'Dapatkan pemahaman mendalam tentang bahasa pemrograman Python tingkat lanjut: Mobile Apps (Kivy), Data Science (Pandas), Machine Learning, & Game 3D.',
    fullDescription: 'Tingkat profesional untuk calon software engineer handal! Berkarir dari trainee hingga lead developer dengan topik mutakhir: Aplikasi Mobile Kivy, Analisis Data Pandas, Machine Learning Scikit-learn di Kaggle, Game 3D Panda3D, dan Web Development Flask + SQL.',
    tools: ['Python 3', 'Kivy (Mobile)', 'Pandas', 'Scikit-learn', 'TensorFlow', 'Panda3D', 'Flask', 'SQLite', 'Kaggle', 'Git/GitHub'],
    finalProject: {
      title: 'Hackathon Startup Prototype & ML Model',
      subtitle: 'Aplikasi Web/Mobile & Machine Learning',
      description: 'Siswa mengembangkan proyek mandiri inovatif (aplikasi mobile/web dinamis + model Machine Learning terintegrasi), berpartisipasi dalam kompetisi Kaggle, dan mempresentasikan pitching ke calon investor.'
    },
    outcomes: [
      'Pengembangan Aplikasi Mobile: Framework Kivy, Kivy MD, Kanban, MVP, & Clock',
      'Data Science & Analisis Data: Pandas DataFrame, pencucian data, visualisasi Matplotlib/Seaborn',
      'Machine Learning & AI: Klasifikasi k-NN, pelatihan model, evaluasi, & Kaggle Competitions',
      'Game 3D Engine: Panda3D, rendering 3D, kontrol kamera, peta biner Pickle',
      'Pengembangan Web Full-Stack: Flask, HTML/CSS, SQLite3, sesi, & perancangan API'
    ],
    primaryFunctions: [
      'Membentuk pemrogram Python tingkat ahli yang menguasai ekosistem AI, Data, dan Software Engineering',
      'Memberikan keunggulan akademis dan karir portofolio siap kerja di industri teknologi',
      'Menumbuhkan jiwa kewirausahaan IT (tech entrepreneurship)'
    ],
    projects: [
      {
        id: 'pp-p1',
        lesson: 16,
        title: "Knight's Rumble - Epic Python Battle Adventure",
        author: 'Marvin',
        age: 18,
        type: 'web',
        link: 'https://learn.algonova.id/community?category=new&filter=projects&projectId=46856740&page=1',
        description: 'Petualangan ksatria berbasis kelas OOP dan struktur data Python.'
      },
      {
        id: 'pp-p2',
        lesson: 32,
        title: 'Python Fun 3D Maze / Pygame Adventure',
        author: 'Marvin',
        age: 18,
        type: 'youtube',
        link: 'https://youtu.be/fHc_Z9tBj0g',
        description: 'Labirin 2D/3D dengan pergerakan hero, sistem musuh patroli, dan pencapaian target.'
      },
      {
        id: 'pp-p3',
        title: 'Machine Learning Classification Model',
        author: 'Siswa Python Pro',
        type: 'drive',
        link: 'https://drive.google.com/file/d/1P_RAbMpTxYxY7zdjMDn96qU3d74ZQgf8/view?usp=sharing',
        description: 'Model kecerdasan buatan untuk memprediksi kecenderungan data menggunakan Scikit-learn.'
      },
      {
        id: 'pp-p4',
        title: 'Data Analytics & Visualization Project',
        author: 'Siswa Python Pro',
        type: 'drive',
        link: 'https://drive.google.com/file/d/1WJueitgzdIMO6i0_-j8kX76IhAyEDzqv/view?usp=sharing',
        description: 'Pembersihan data besar, pengelompokan Pandas, dan visualisasi grafik insight pasar.'
      }
    ],
    modules: [
      {
        id: 'pp-m1',
        title: 'Modul 1: Aplikasi Mobile (Kivy) & MVP',
        lessons: [
          {
            id: 'PP-M1-L1',
            lessonNumber: 1,
            title: 'Pengenalan Aplikasi Mobile dengan Kivy',
            url: 'https://docs.google.com/document/d/1W4AKqGc0jBmNrQU0N4_qkPUIJzkQElaN0-Cktm4CzF8/edit',
            materi: 'Widget Kivy, event binding, dan arsitektur aplikasi seluler.',
            tujuan: ['Membuat antarmuka seluler pertama dengan Kivy']
          }
        ]
      },
      {
        id: 'pp-m2',
        title: 'Modul 2: Data Science & Pandas',
        lessons: [
          {
            id: 'PP-M2-L1',
            lessonNumber: 7,
            title: 'Data Analisa & Pengenalan Platform Pandas',
            url: 'https://docs.google.com/document/d/1cXrcNkTAUWlA9o3ZIenQxv1SvMZPoK9BSQ-aDFN16oI/edit',
            materi: 'Seri & DataFrame, membaca file CSV, pemfilteran dan analisis statistik.',
            tujuan: ['Menguasai manipulasi data dengan Pandas']
          }
        ]
      },
      {
        id: 'pp-m3',
        title: 'Modul 3: Machine Learning & AI (Scikit-learn)',
        lessons: [
          {
            id: 'PP-M3-L1',
            lessonNumber: 13,
            title: 'Algoritma Machine Learning Dasar (k-NN)',
            url: 'https://docs.google.com/document/d/163ED3fq5wp_7qWV2Mfcjp9dkTR59tZIUwA3rLZxHRww/edit',
            materi: 'Klasifikasi data, k-Nearest Neighbors, pemisahan dataset training/testing.',
            tujuan: ['Membangun dan melatih model kecerdasan buatan pertama']
          }
        ]
      }
    ]
  },

  // 8. MATH EXPLORER
  {
    id: 'math-explorer',
    slug: 'math-explorer',
    number: 8,
    title: 'Math Explorer',
    category: 'math',
    categoryName: 'Matematika & Logika',
    badgeColor: 'border-sky-400 bg-sky-50 text-sky-600',
    bgLight: 'bg-sky-50/50',
    textColor: 'text-sky-600',
    ageRange: 'Usia 6–8 Tahun (1 SD - 3 SD)',
    minAge: 6,
    maxAge: 8,
    duration: '64 Pertemuan (60-90 Menit)',
    classSize: 'Grup (7-10 Murid)',
    difficulty: 'Pemula',
    language: 'Indonesia',
    shortDescription: 'Mengubah matematika menjadi petualangan seru! Membangun fondasi logika & pemecahan masalah anak usia dini melalui aktivitas interaktif.',
    fullDescription: 'Matematika bukan lagi pelajaran yang menakutkan! Math Explorer mengajak siswa mengeksplorasi matematika lewat permainan visual, teka-teki korek api, labirin aritmatika, bentuk geometris, simetri, dan soal cerita kontekstual.',
    tools: ['Presentasi Interaktif', 'Tongkat Hitung', 'Papan Tulis Online', 'Mainan Edukatif', 'Penggaris & Dadu', 'Gunting & Cermin'],
    finalProject: {
      title: 'Tantangan Logika Visual & Aritmatika',
      subtitle: 'Eksplorasi Konsep Matematika Terpadu',
      description: 'Siswa menyelesaikan serangkaian teka-teki spasial, simetri cermin, dan labirin aritmatika yang memperagakan pemahaman matematis mereka secara percaya diri.'
    },
    outcomes: [
      'Konsep Angka & Aritmatika Dasar: Berhitung maju/mundur, komposisi angka, sifat ±0 dan ±1, nilai tempat',
      'Geometri & Ruang Spasial: Bentuk geometri datar, poligon, simetri cermin, keliling, dan 3D visual',
      'Pemikiran Logis & Klasifikasi: Pengelompokan benda, pola urutan, teka-teki korek api, labirin angka',
      'Konsep Himpunan & Kombinatorik: Himpunan, subhimpunan, dan membaca tabel dasar',
      'Kepercayaan Diri Akademis: Menghilangkan rasa takut pada matematika dan menumbuhkan rasa ingin tahu'
    ],
    primaryFunctions: [
      'Mengubah konsep matematika abstrak menjadi pengalaman konkrit yang menyenangkan',
      'Melatih logika, analisis, dan kemampuan pemecahan masalah sejak dini',
      'Membangun fondasi kuat untuk keberhasilan akademis sekolah'
    ],
    projects: [],
    modules: [
      {
        id: 'me-m1',
        title: 'Modul 1: Dasar-Dasar Matematika & Bilangan',
        lessons: [
          {
            id: 'ME-L1',
            lessonNumber: 1,
            title: 'Berhitung maju dan mundur',
            url: 'https://docs.google.com/document/d/1UgGLBtNLUAKXQ5HnwXTvVnymbTvPNKffNUG9uJ3PufI/edit',
            materi: 'Pemahaman spasial, berhitung maju dan mundur, menentukan letak benda.',
            tujuan: 'Mengkorelasikan penghitungan maju dan mundur dengan pertambahan dan pengurangan jumlah benda.'
          },
          {
            id: 'ME-L2',
            lessonNumber: 2,
            title: 'Bentuk geometri',
            url: 'https://docs.google.com/document/d/1EpmyWnETQBbRis3Hu1ojsQYFusLaySNUmWjiS2wgm9w/edit',
            materi: 'Bentuk geometri datar, menyusun dan menganalisis objek.',
            tujuan: 'Mengenali bentuk-bentuk di sekitar kita yang mirip dengan bentuk geometri datar.'
          },
          {
            id: 'ME-L6',
            lessonNumber: 6,
            title: 'Teka-teki korek api',
            url: 'https://docs.google.com/document/d/15c_Kyuso9xPK79QqhSCi5NX__EqjLCtEQY15dyAqjB8/edit',
            materi: 'Angka sebagai simbol, perbandingan angka, analisis dan perencanaan.',
            tujuan: 'Melatih keterampilan membandingkan angka satu digit dengan korek api.'
          }
        ]
      }
    ]
  },

  // 9. MATH MASTER
  {
    id: 'math-master',
    slug: 'math-master',
    number: 9,
    title: 'Math Master',
    category: 'math',
    categoryName: 'Matematika & Logika Lanjutan',
    badgeColor: 'border-indigo-500 bg-indigo-50 text-indigo-600',
    bgLight: 'bg-indigo-50/50',
    textColor: 'text-indigo-600',
    ageRange: 'Usia 9–13 Tahun (4 SD - 7 SMP)',
    minAge: 9,
    maxAge: 13,
    duration: '32 Pertemuan (60-90 Menit)',
    classSize: 'Grup (7-10 Murid)',
    difficulty: 'Menengah',
    language: 'Indonesia',
    shortDescription: 'Taklukkan tantangan matematika kompleks! Dirancang untuk memperdalam pemahaman konsep, mengasah pemikiran kritis, dan persiapan Olimpiade.',
    fullDescription: 'Ikuti petualangan agen rahasia Ewen dan Odd! Math Master membawa siswa kelas 4 SD - 7 SMP menjelajahi topik olimpiade matematika: Flexagon, Poliomino, Lingkaran Euler, Logika Linguistik, Futoshiki, Sandi Caesar, Jaring-jaring Kubus, dan Pertarungan Matematika.',
    tools: ['Platform Algorithmics', 'Presentasi Visual Storyline', 'Handout Olimpiade', 'Tangram & Flexagon', 'Alat Peraga Geometri'],
    finalProject: {
      title: 'Pertarungan Matematika Terakhir (Math Battle)',
      subtitle: 'Kompetisi Olimpiade Matematika Tim',
      description: 'Pada pertemuan ke-32, siswa mengikuti Math Battle kompetisi tim yang seru untuk menguji semua keterampilan pemecahan masalah, argumentasi logis, dan pembuktian solusi.'
    },
    outcomes: [
      'Aritmatika Lanjutan & Sifat Operasi: Sifat asosiatif, komutatif, pembagian bersisa, persegi ajaib',
      'Geometri Olimpiade & Ruang: Keliling poligon gabungan, jaring-jaring kubus, simetri lurus/cermin, luas',
      'Logika Tingkat Tinggi: Lingkaran Euler, tabel logika, Futoshiki, logika linguistik (Bahasa Mars)',
      'Kombinatorika & Kriptografi: Poliomino, triomino, Sandi Caesar, perhitung pola combinatoric',
      'Persiapan Kompetisi & Kerja Tim: Kecepatan analisis, ketekunan, dan kerja sama tim dalam Math Battle'
    ],
    primaryFunctions: [
      'Membangun fondasi logika berpikir kritis dan analytical problem-solving tingkat olimpiade',
      'Mengubah persepsi matematika dari hafalan rumus menjadi petualangan sains yang menarik',
      'Menyiapkan siswa menghadapi olimpiade matematika dan tantangan akademis lanjutan'
    ],
    projects: [],
    modules: [
      {
        id: 'mm-m1',
        title: 'Modul 1: Sifat Penjumlahan, Poliomino & Flexagon',
        lessons: [
          {
            id: 'MM-L1',
            lessonNumber: 1,
            title: 'Penjumlahan dan Pengurangan',
            url: 'https://docs.google.com/document/d/1v11l4mgBJYm2zDRx1qgz9PGhyT9iLNO44GEXB3atuY8/edit',
            materi: 'Teknik berhitung lisan, analisis logis ilustrasi, identifikasi ciri-ciri benda.',
            tujuan: 'Mengenalkan cara penjumlahan dan pengurangan bilangan dua digit secara lisan.'
          },
          {
            id: 'MM-L3',
            lessonNumber: 3,
            title: 'Sifat Penjumlahan & Flexagon',
            url: 'https://docs.google.com/document/d/1-JW6VWqcq-_yPc7RvCJ-hDO3DyzEH7PU4FpZF1HMPqA/edit',
            materi: 'Pengulangan berhitung lisan, pola urutan, konstruksi Flexagon (mainan kertas poliomino).',
            tujuan: 'Mengkonsolidasi keterampilan berhitung dan memperkenalkan Flexagon.'
          },
          {
            id: 'MM-L7',
            lessonNumber: 7,
            title: 'Poliomino',
            url: 'https://docs.google.com/document/d/1bdpJa1-iZsaqq6quy5fpfE-7yIqu47Ct-UtzyyqHTQs/edit',
            materi: 'Bentuk geometris yang dibuat dari penggabungan persegi berukuran sama.',
            tujuan: 'Menjelaskan apa itu poliomino dan jenis-jenisnya.'
          }
        ]
      },
      {
        id: 'mm-m2',
        title: 'Modul 2: Lingkaran Euler, Logika Linguistik & Kriptografi',
        lessons: [
          {
            id: 'MM-L12',
            lessonNumber: 12,
            title: 'Keliling & Lingkaran Euler',
            url: 'https://docs.google.com/document/d/1hKYuRs16omsj9LqOuPCEG-DqXc48ov9Xt4qrQ6Yfkbo/edit',
            materi: 'Perhitungan keliling praktis, penempatan objek di keliling, penggunaan Lingkaran Euler.',
            tujuan: 'Mencari keliling poligon dan memperkenalkan Lingkaran Euler.'
          },
          {
            id: 'MM-L22',
            lessonNumber: 22,
            title: 'Futoshiki',
            url: 'https://docs.google.com/document/d/1TN4aFL14-s90rBybDRWRJFguqCBEIRFZl-9Pso7yzUk/edit',
            materi: 'Teka-teki logika Jepang pada kisi persegi dengan tanda ketidaksamaan.',
            tujuan: 'Menjelaskan dan memecahkan teka-teki Futoshiki.'
          },
          {
            id: 'MM-L25',
            lessonNumber: 25,
            title: 'Jaring-jaring & Sandi Caesar',
            url: 'https://docs.google.com/document/d/1E8hBzzaK74SPaiKvkEbHfOJgDARa6Tbcj_37jzoV45w/edit',
            materi: 'Bekerja dengan jaring-jaring kubus, enkripsi & dekripsi pesan dengan Sandi Caesar.',
            tujuan: 'Memperkenalkan metode enkripsi Sandi Caesar.'
          }
        ]
      }
    ]
  },

  // 10. MATH TUTORING
  {
    id: 'math-tutoring',
    slug: 'math-tutoring',
    number: 10,
    title: 'Math Tutoring',
    category: 'math',
    categoryName: 'Les Privat Adaptif AI',
    badgeColor: 'border-blue-500 bg-blue-50 text-blue-600',
    bgLight: 'bg-blue-50/50',
    textColor: 'text-blue-600',
    ageRange: 'Usia 5–17 Tahun (TK B - 11 SMA)',
    minAge: 5,
    maxAge: 17,
    duration: '40 Pertemuan Personal',
    classSize: 'Private & Premium (4 Murid)',
    difficulty: 'Pemula - Menengah',
    language: 'English / Indonesia',
    shortDescription: 'Bimbingan belajar matematika privat yang adaptif dan personal. Dengan bantuan teknologi AI, materi disesuaikan secara unik untuk setiap siswa.',
    fullDescription: 'Pendekatan revolusioner les privat matematika! Dimulai dari Tes Diagnostik 40-60 tugas yang mengidentifikasi kelemahan & kelebihan anak secara akurat, tutor merancang silabus personal 40 sesi yang didukung materi interaktif berbasis AI.',
    tools: ['AI Adaptive Engine', 'Tes Diagnostik 40-60 Tugas', 'Silabus Personal 40 Pertemuan', 'Live Private Classroom', 'Recording & Parent Reports'],
    finalProject: {
      title: 'Pencapaian Target Belajar Personal',
      subtitle: 'Evaluasi & Garansi Kenaikan Pemahaman',
      description: 'Anak menyelesaikan portofolio tantangan matematika sesuai kurikulum sekolah atau target pribadi yang disepakati di awal.'
    },
    outcomes: [
      'Diagnosis Akurat: Pemetaan area pemahaman matematika anak secara menyeluruh',
      'Silabus Personal 100%: Materi tidak seragam, disesuaikan dengan ritme anak',
      'Kecepatan Belajar Fleksibel: Anak tidak dipaksa terburu-buru atau tertahan',
      'Keterlibatan Tinggi dengan AI: Materi belajar dikemas dalam topik minat favorit anak',
      'Laporan Kemajuan Berkala: Orang tua mendapatkan update objektif perkembangan anak'
    ],
    primaryFunctions: [
      'Memberikan bimbingan matematika paling personal dan efisien tanpa tekanan',
      'Membantu anak mengejar ketertinggalan materi sekolah atau akselerasi materi',
      'Menanamkan rasa percaya diri dan penguasaan matematika jangka panjang'
    ],
    projects: [],
    modules: [
      {
        id: 'mt-m1',
        title: 'Tahap 1: Tes Diagnostik Terstruktur',
        lessons: [
          {
            id: 'MT-L1',
            lessonNumber: 1,
            title: 'Asesmen Diagnostik Pemahaman Matematika',
            materi: '40-60 tugas pilihan & isian mencakup kurikulum Indonesia usia 5-8, 9-12, dan 13-15 tahun.',
            tujuan: 'Mengidentifikasi secara presisi gap pemahaman dan potensi anak.'
          }
        ]
      },
      {
        id: 'mt-m2',
        title: 'Tahap 2: Sesi Belajar Personal 9-Langkah',
        lessons: [
          {
            id: 'MT-L2',
            lessonNumber: 2,
            title: 'Sesi Belajar Privat Terstruktur',
            materi: '1. Pemanasan, 2. Tujuan, 3. Masalah, 4. Topik Baru, 5. Latihan & Umpan Balik, 6. Koneksi Dunia Nyata, 7. Penguatan, 8. Refleksi, 9. PR.',
            tujuan: 'Memastikan retensi materi dan pemahaman mendalam pada setiap sesi.'
          }
        ]
      }
    ]
  },

  // 11. ARTIFICIAL INTELLIGENCE
  {
    id: 'artificial-intelligence',
    slug: 'artificial-intelligence',
    number: 11,
    title: 'Artificial Intelligence (AI)',
    category: 'design_ai',
    categoryName: 'Kecerdasan Buatan & Multimedia',
    badgeColor: 'border-red-500 bg-red-50 text-red-600',
    bgLight: 'bg-red-50/50',
    textColor: 'text-red-600',
    ageRange: 'Usia 12–15 Tahun',
    minAge: 12,
    maxAge: 15,
    duration: '36 Pertemuan (60-90 Menit)',
    classSize: 'Private, Premium (4 Murid) & Grup (7-10 Murid)',
    difficulty: 'Menengah - Sulit',
    language: 'English / Indonesia',
    shortDescription: 'Membekali siswa dengan kemampuan menghasilkan berbagai konten multimedia menggunakan kecerdasan buatan, dari teks, gambar, suara, video hingga model 3D.',
    fullDescription: 'Mengubah siswa dari pengguna pasif menjadi kreator aktif di era AI! Mempelajari Prompt Engineering tingkat lanjut (Zero-Shot, Few-Shot, Chain-of-Thought), cerita interaktif Twine, gambar AI, suara ElevenLabs, video Runway, dan model 3D Meshy.',
    tools: ['ChatGPT', 'Twine', 'Mage.space / FusionBrain', 'Stable Audio', 'ElevenLabs', 'Runway GEN-4', 'Meshy 3D', 'Blender', 'Tabletopia'],
    finalProject: {
      title: 'Pengembangan & Presentasi Proyek AI Pribadi',
      subtitle: 'Karya Multimedia Terintegrasi AI',
      description: 'Siswa merancang, mengembangkan, dan mempresentasikannya proyek multimedia pribadi komprehensif (cerita interaktif, papan permainan 3D, atau karya multimedia AI).'
    },
    outcomes: [
      'Prompt Engineering Lanjutan: Zero-Shot, Few-Shot, dan Chain-of-Thought prompting',
      'Generasi Teks & Kode: Cerita interaktif non-linier Twine, kustomisasi HTML/CSS dengan AI',
      'Generasi Visual & Concept Art: Prompt gambar, model difusi, SOW aset game, pembersihan background',
      'Generasi Suara & Musik: Musik latar Stable Audio, sintesis suara karakter ElevenLabs',
      'Generasi Video & 3D: Runway GEN-4 video, model 3D Meshy, & pameran karya'
    ],
    primaryFunctions: [
      'Membekali generasi muda dengan keterampilan mutakhir kecerdasan buatan terapan',
      'Menggabungkan keahlian kreatif dan teknis untuk menghasilkan karya multimedia tingkat tinggi',
      'Membahas etika AI dan menyiapkan siswa untuk profesi masa depan di industri teknologi'
    ],
    projects: [],
    modules: [
      {
        id: 'ai-m1',
        title: 'Modul 1: Pembuatan Teks & Cerita Interaktif (ChatGPT & Twine)',
        lessons: [
          {
            id: 'AI-L1',
            lessonNumber: 1,
            title: 'Pengantar AI & Fitur Model Teks',
            url: 'https://docs.google.com/document/d/1Pay7oPe3C5qSL9VTaFvK_AmNmBroyDnFA1UEW6QkP-s/edit',
            materi: 'Definisi AI, Jaringan Saraf, Model Bahasa Besar (LLM), dan struktur perintah prompt dasar.',
            tujuan: ['Memahami dasar kecerdasan buatan & merumuskan prompt teks pertama']
          },
          {
            id: 'AI-L3',
            lessonNumber: 3,
            title: 'Menghasilkan cerita yang menawan di Twine',
            url: 'https://docs.google.com/document/d/1LG-4U1-M-_rqx9JBRNXeUGY8yWhOH7zKKL6Ic5AxD1M/edit',
            materi: 'Pengembangan cerita game interaktif, lore, dan narasi bercabang di Twine.',
            tujuan: ['Merancang alur cerita game interaktif non-linier']
          }
        ]
      },
      {
        id: 'ai-m2',
        title: 'Modul 2: Generasi Visual, Suara & Video AI',
        lessons: [
          {
            id: 'AI-L8',
            lessonNumber: 8,
            title: 'Fitur pembuatan gambar AI',
            url: 'https://docs.google.com/document/d/1mWP23ew_BALirT9rH6ko9qThN9_Atrd4ifURT6ui7gk/edit',
            materi: 'Model difusi, DALL-E 3, Mage.space, dan formulasi prompt gambar artistik.',
            tujuan: ['Menghasilkan ilustrasi dan concept art berkualitas tinggi']
          },
          {
            id: 'AI-L14',
            lessonNumber: 14,
            title: 'Generasi ucapan & suara sintetis (ElevenLabs)',
            url: 'https://docs.google.com/document/d/1ozSxg5A3pwny4n4aNF1iaSr8e-fJZXu1B99IPhEgV3k/edit',
            materi: 'Sintesis suara karakter dengan parameter emosi di ElevenLabs.',
            tujuan: ['Membuat sulit suara AI untuk karakter game/cerita']
          },
          {
            id: 'AI-L16',
            lessonNumber: 16,
            title: 'Fitur pembuatan video (Runway)',
            url: 'https://docs.google.com/document/d/10tOUXnVFZ3sxr3MOAZEmSUhm_m-raXfEvS7V4JWD50c/edit',
            materi: 'Model video GEN-4, prompt gerakan video, dan editing video.',
            tujuan: ['Menghasilkan animasi video dari teks dan gambar']
          }
        ]
      }
    ]
  }
];

export const CATEGORIES = [
  { id: 'all', name: 'Semua Program' },
  { id: 'coding', name: 'Coding & Game Dev' },
  { id: 'design_ai', name: 'Desain, AI & Literasi' },
  { id: 'math', name: 'Matematika & Logika' }
] as const;

export const AGE_GROUPS = [
  { id: 'all', label: 'Semua Usia' },
  { id: '5-7', label: 'Usia 5 - 7 Tahun (TK - 1 SD)' },
  { id: '8-10', label: 'Usia 8 - 10 Tahun (2 - 4 SD)' },
  { id: '11-14', label: 'Usia 11 - 14 Tahun (5 SD - SMP)' },
  { id: '15-17', label: 'Usia 15 - 17 Tahun (SMA)' }
] as const;

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Bunda Sarah',
    role: 'Orang Tua Kenzo (8 thn)',
    course: 'Visual Programming',
    comment: 'Kenzo yang tadinya cuma suka main game di tablet, sekarang sudah bisa bikin game ularnya sendiri di Scratch! Dia bangga banget pas karya ularnya ditunjukin ke neneknya.',
    rating: 5
  },
  {
    id: 2,
    name: 'Pak Hendra',
    role: 'Orang Tua Kevin (13 thn)',
    course: 'Game Design (Roblox)',
    comment: 'Anak saya belajar Roblox Studio di Kursus Cerdas. Tutornya sabar banget mengajarkan logika Lua scripting. Sekarang Kevin paham koordinat 3D dan pemikiran sistematis.',
    rating: 5
  },
  {
    id: 3,
    name: 'Ibu Ratna',
    role: 'Orang Tua Khaira (6 thn)',
    course: 'Coding Knight',
    comment: 'Sangat direkomendasikan untuk usia dini. Pembelajarannya seperti bermain sambil petualangan, tapi logika berpikirnya jalan banget.',
    rating: 5
  }
];

export const FAQS = [
  {
    q: 'Apakah anak yang belum pernah coding bisa ikut kursus ini?',
    a: 'Tentu saja! Kursus Cerdas dirancang berjenjang dari level Pemula (tanpa perlu pengalaman sama sekali, seperti Coding Knight atau Math Explorer) hingga level Lanjutan.'
  },
  {
    q: 'Bagaimana metode belajarnya? Apakah online atau tatap muka?',
    a: 'Kelas dilaksanakan secara interaktif interaktif (Private 1-on-1 atau Kelompok Kecil maks 8-10 anak). Siswa mendapatkan akses platform tugas, panduan metodologi, dan bimbingan tutor berpengalaman.'
  },
  {
    q: 'Perangkat apa saja yang dibutuhkan?',
    a: 'Untuk kelas usia dini (Coding Knight/Math Explorer), tablet atau laptop standard sudah cukup. Untuk kelas Roblox, Python, Graphic Design, dan AI, direkomendasikan menggunakan laptop/PC dengan koneksi internet stabil.'
  },
  {
    q: 'Apakah orang tua mendapatkan laporan perkembangan anak?',
    a: 'Ya, orang tua mendapatkan laporan evaluasi hasil karya, sertifikat kelulusan modul, serta undangan ke acara Presentasi Proyek Akhir / Project Fair.'
  }
];
