import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import YouTube from 'react-youtube';

const Trailer = ({ title }) => {
  const title2 = title.slice(0, 5);
  const { detailYou, } = useSelector(state => state.detail);
  console.log("YouTube! - Trailer", detailYou)
  const [lgShow, setLgShow] = useState(false);
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const _onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  return (
    <div>
      <Button variant="danger" onClick={() => setLgShow(true)}>watching trailer</Button>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {detailYou.results.map((name) => name.name.indexOf(title2) != -1 ?
            <YouTube videoId={name.key} opts={opts} onReady={_onReady} />
            : "")}
          ;
          {/* 내가 하고 싶은거
            1. id값이 일치하는 거 가져와서 예고편을 가져오려했으나 일치하는 id 없어서 실패
            2. 같은 이름의 영화를 가져오려 했으나 이름이 서로 같지 않음 어설픈 실패
            3. 그렇다면 '포함하고있느냐?'에대한 질문 indexOf에 대한 값이  -1(false)값이 나와버림
            4. 값이 같지 않아서? 아니, indexOf는 포함만 하고 있으면 1이 나올 수 있다. 왜?
            5. 그렇다면  함수식이 잘못된 것.
            6. 왜냐면 서로 name, title은 잘 가져와짐.
            7. 그렇다면 우선 indexOf를 1로 만들자. 그러고나서 해당 key값 가져오는 거임.
            8. 여기서 번외로 나는 indexOf에만 의존해야하는가? filter나 find는 안되는 건가?

            해냈다ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ 일단 처음에!!!!!!!
            괄호 밖에다가  indexOf를 쓴 게 문제였다!! name옆에 쓰니 잘만 나왔다. 그러고나서
            서로 제목이 다른 문제가 있었는데 그냥 slice함수로 잘라버렸따 ㅎ그냥 공통제목있으면
            키값 가져오게했다..언젠가 이렇게 하면 시리즈 영화들에서 피 볼 게 분명하지만 
            이 api가 그렇게 생겨먹은 걸 어쩌겠는가????????????
          */}
        </Modal.Body>
      </Modal>
    </div >
  )

}

export default Trailer
