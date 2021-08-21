import React from 'react';
import { useState, useRef, useCallback } from 'react';
// import SampleVideoContainer from './SampleVideoContainer';
import PhotoPage from './PhotoPage';
import FilmPage from './FilmPage';
import useWindowDimensions from '../hooks/useWindowDimensions'
import useMousePosition from '../hooks/useMousePosition';
import { getInitSampleArtistsInfo, clientCompanyList, clientArtistList } from '../resource';
import TextList from './TextList'


const Home = ({category}) => {
    // console.log(category);
    const { height, width } = useWindowDimensions();
    const { mousePosition } = useMousePosition();
    // const [artists, setArtists] = useState(getInitSampleArtistsInfo);
  
    const artists = useRef(getInitSampleArtistsInfo());
    const targetPos1 = useRef({x: 100, y: 100});
    const targetPos2 = useRef({x: 0, y: 0});
  
    // const hasMovedCursor = typeof mousePosition.x === "number" && typeof mousePosition.y === "number";
  
    artists.current = artists.current.map((artist) => {
        return {
            ...artist,
            initPos: {
                ...artist.initPos
            },
            seedPos: {
                x: artist.initPos.x * width / 1024 - width/3,
                y: artist.initPos.y * height / 768 - height/3
            }
        }
    });

    const offsetRatio = -100;
    const diifRatioGroup = 200;
    const ACT_RESOLUTION = 10;

    if(mousePosition.x && Math.round(mousePosition.x) % ACT_RESOLUTION === 0) {
        targetPos1.current = {
            x: -(mousePosition.x - width/2) + width/offsetRatio,
            y: -(mousePosition.y - height/2) + height/offsetRatio
        };
    }
    if(mousePosition.x && Math.round(mousePosition.x + 5) % ACT_RESOLUTION === 0) {
        targetPos2.current = {
            x: -(mousePosition.x - width/2) + width/diifRatioGroup + width/offsetRatio,
            y: -(mousePosition.y - height/2) + height/diifRatioGroup + height/offsetRatio
        };
    }

    const stylesTitle = {
        position: 'absolute',
        color: 'white',
        top: `${height - 80}px`,
        left: '10px',
    };

    // const isCategoryFilmDisplay = category !== 'photo';


    const [ title, setTitle ] = useState('');
    // TODO: Change name.
    const onMouseOver = useCallback(newTitle => setTitle(newTitle), [setTitle]);
    
    // const tmpFunc = async () => {
    //     let canvas = document.getElementById("canvas_test");
    //     var video = document.getElementById('video1');
    //     if (canvas && video) {
    //         let cx = canvas.getContext("2d");
    //         let grd = cx.createRadialGradient(100, 
    //                         100, 5, 100, 100, 100);
    //         grd.addColorStop(0, "red");
    //         grd.addColorStop(1, "green");
    //         cx.fillStyle = grd;
    //         cx.fillRect(0, 0, 200, 200);

    //         canvas.getContext('2d').drawImage(video, 0, 0, video.videoWidth, video.videoHeight);  

    //         // c.srcObject = captureStream;
    //         // cx.drawImage(c, 0, 0, window.width, window.height);
    //     };
    // }
    
    // tmpFunc();

    // const artistGroup1 = artists.current.filter(artist => artist.group === 'group1')
    // const artistGroup2 = artists.current.filter(artist => artist.group === 'group2')

    

    const zIndex = {
        film: (category !== 'photo' || category !== 'note') ? 3 : 1,
        photo: category === 'photo' ? 3 : 1,
        client: category === 'client' ? 3 : 1,
        note: category === 'note' ? 3 : 1,
        contact: category === 'contact' ? 3 : 1,
    }


    return (
        <div>
            {/* <canvas id="canvas_test" width = {width} height = {height}
            style = {{position: 'absolute', left:'0px', right:'0px', "border": "1px solid black"}}>
                {}
            </canvas> */}
            {/* <h1>
                {hasMovedCursor
                ? `Your cursor is at ${mousePosition.x}, ${mousePosition.y}.`
                : "Move your mouse around."}
            </h1> */}


            {/* {isCategoryFilmDisplay && 
                <SampleVideoContainer
                    artists = {artistGroup1}
                    screenSize={{height, width}}
                    targetPos={targetPos1.current}
                    onMouseOver={onMouseOver}
                />
            }

            {isCategoryFilmDisplay && 
                <SampleVideoContainer
                    artists = {artistGroup2}
                    screenSize={{height, width}}
                    targetPos={targetPos2.current}
                    onMouseOver={onMouseOver}
                />
            } */}
            
            <FilmPage
                screenSize={{height, width}}
                targetPos={[targetPos1.current, targetPos2.current]}
                zIndex={zIndex.film}
                onMouseOver={onMouseOver}
            ></FilmPage>

            <PhotoPage
                screenSize={{height, width}}
                targetPos={[targetPos1.current, targetPos2.current]}
                zIndex={zIndex.photo}
            ></PhotoPage>
        
            {category === 'client' && 
                <div
                    style={{width: width, height: height, position: 'absolute', top: `0px`, left: `0px`, zIndex: `${zIndex.client}`}}
                >
                    <div
                        style={{position: 'absolute', top: `60px`, left: `10px`, color: 'white'}}
                    >
                        <h1>Company</h1>
                        <TextList textList={clientCompanyList} width='300px' height='300px'/>
                    </div>
                    
                    <div
                        style={{position: 'absolute', top: `${height-400}px`, left:`${width-410}px`, color: 'white'}}
                    >
                        <h1>Artist</h1>
                        <TextList textList={clientArtistList} width='400px' height='300px'/>
                    </div>
                </div>
            }

            {category === 'note' && 
                <div
                    style={{width: width, height: height, position: 'absolute', top: `0px`, left: `0px`, 'background-color': 'black', zIndex: `${zIndex.note}`}}
                >
                    <div
                        style={{position: 'absolute', top: `80px`, left: `30px`, color: 'white', 'text-align': 'left'}}
                    >
                        <h1>Note.</h1>
                    </div>
                </div>
            }

            {category === 'contact' && 
                <div
                    style={{width: width, height: height, position: 'absolute', top: `0px`, left: `0px`, zIndex: `${zIndex.contact}`}}
                >
                    <div
                        style={{position: 'absolute', top: `80px`, left: `30px`, color: 'white', 'text-align': 'left'}}
                    >
                        <h1>APE.</h1>
                        <h2>서울특별시 마포구 양화진길 6, 6층</h2>
                        <h2>+82-10-8487-2110</h2>
                        <h2>+82-10-4642-8321</h2>
                        <h2>apeproductionskr@gmail.com</h2>
                    </div>
                </div>
            }

            <h1 style={stylesTitle}>
                {title}
            </h1>
        </div>
    );
}

export default Home;