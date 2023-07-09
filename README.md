<a name="readme-top"></a>

<!-- [![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url] -->

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <!-- <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a> -->

  <h1 align="center">Gerenate Label Book</h1>

  <p align="center">
    <!-- An awesome README template to jumpstart your projects!
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template">View Demo</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Report Bug</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Request Feature</a>
  </p> -->
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

  <ul>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
  </ul>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]]()

Chào mừng đến với chương trình tạo nhãn vở từ mẫu có sẵn trong file Word và xuất chúng ra dưới định dạng file PDF! Chương trình này là công cụ đáng tin cậy và tiện lợi giúp bạn tạo ra nhãn vở dễ dàng từ các mẫu có sẵn với số lượng lớn và lưu chúng dưới dạng PDF để tiện lợi cho người dùng.

#### Tính năng chính

- Tạo Nhãn Vở từ Mẫu: Chương trình cho phép bạn nhập mẫu nhãn vở từ file Word sẵn có và tạo ra các nhãn vở tương tự từ mẫu đó. Bạn chỉ cần cung cấp mẫu và chương trình sẽ xử lý phần còn lại.

- Tùy Chỉnh và Định Dạng Mẫu: Chương trình cho phép bạn tùy chỉnh và định dạng thông tin trên nhãn vở, bao gồm tên, địa chỉ, số điện thoại và bất kỳ thông tin nào khác. Bạn có thể thay đổi màu sắc, kích thước, kiểu chữ và các thuộc tính khác để tạo nhãn vở theo ý muốn.

- Xuất Ra File PDF: Sau khi bạn đã tạo và tùy chỉnh nhãn vở theo ý muốn, chương trình sẽ xuất chúng ra dưới định dạng file PDF. Điều này giúp bạn dễ dàng chia sẻ, in ấn hoặc lưu trữ nhãn vở một cách thuận tiện.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![Node][Node.js]][Node-url]
- [![Python]][Python-url]
- [![Window]][Window-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

<!-- This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps. -->

### Prerequisites

- Nodejs 18
- Python 3
- OS: Window
- Install MS Office
- Install Fonts

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/popudev/generate-label-book.git
   ```
2. Install NPM packages and Python libary

   ```sh
   npm run setup
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

1. Import input.json

   ```json
   {
     "maunhanvo": "mau_chuan.docx",
     "hovatens": [
       "Nguyễn Trọng Phú",
       "Huỳnh Gia Phú",
       "Đoàn Ngọc Hải",
       "Phan Chung Đăng Khôi",
       "Đỗ Thị Bích Tuyền",
       "Lý Minh Phú",
       "Vũ Hoàng Trọng",
       "Phan Linh Chi",
       "Võ Phi Anh",
       "Trương Yến Nhi"
     ],
     "lop": "2A",
     "taps": [
       "Toán",
       "Toán",
       "Tiếng Việt",
       "Tiếng Việt",
       "Tiếng Anh",
       "Tn và Xh",
       "Công nghệ",
       "Âm nhạc",
       "Mỹ thuật",
       "Đạo đức",
       "Gd Thể chất",
       "Hđ Trải nghiệm",
       "Vở tập vẽ",
       "Vbt Tiếng Việt",
       "Vbt Tiếng Việt",
       "Vbt Toán",
       "Vbt Toán",
       "Tập viết",
       "Tập viết",
       ""
     ]
   }
   ```

2. Run

   ```sh
   npm start
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.jpg
[Node.js]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/
[Python]: https://img.shields.io/badge/Python-14354C?style=for-the-badge&logo=python&logoColor=white
[Python-url]: https://python.org/
[Window]: https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white
[Window-url]: https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white
