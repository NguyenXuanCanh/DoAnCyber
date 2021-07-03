import React, { Component } from 'react'
// import Carousel from 'react-bootstrap/Carousel';
import { Carousel, Row, Col, Card } from "react-bootstrap";
import axios from 'axios'

import Container from 'react-bootstrap/Container';
import FilmItem from './filmItem';


export default class FilmBlock extends Component {
    state = {
        mangPhim: [

        ],
    }
    loadPhim = async () => {
        try {
            const result = await axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP06',
                // url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01',
                method: 'GET',
            });
            this.setState({
                mangPhim: result.data,
            })
        } catch (error) {
            console.log(error);
        }
    }
    renderCarouselFilm() {
        Array.prototype.chunk = function (size) {
            const result = [];

            while (this.length) {
                result.push(this.splice(0, size));
            }

            return result;
        };
        return (
            this.state.mangPhim.chunk(8).map((chunk, idx) => (
                <Carousel.Item key={idx}>
                    <Row>
                        {chunk.map((item, idx2) => (
                            <Col lg="3" key={idx2}>
                                <FilmItem phim={item}></FilmItem>
                            </Col>
                        ))}
                    </Row>
                </Carousel.Item>
            ))
        )
    }
    render() {
        return (
            <div class="film__content" id="film__content">
                <Container>
                    <Carousel style={{ background: "none" }} class="myCarousel__slick">
                        {this.renderCarouselFilm()}
                    </Carousel>
                </Container>
            </div>
        )
    }
    componentDidMount() {
        { this.loadPhim() }
    }
}
