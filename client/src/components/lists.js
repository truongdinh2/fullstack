import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Row, Col } from 'antd'
import { deletePostA, updateLikeA } from '../action';
export default function Lists({ setIdCurrent }) {
  const state = useSelector(state => state.post);
  const dispatch = useDispatch();
  const onDelete = (item) => {dispatch(deletePostA(item._id)) };
  const onEdit = (item) => { setIdCurrent(item._id) };
  const onLike = (item) => { dispatch(updateLikeA(item._id));console.log(item._id) }
  return (
    <div>
      {
        state.map((item, key) =>
          <Row key={key}>
            <Col offset={2} span={4}>
              <p  >{item.title}
              </p>
            </Col>
            <Col span={2}>
              <Button onClick={() => onDelete(item)}>del</Button>
            </Col>
            <Col span={2}>
              <Button onClick={() => onEdit(item)}>edit</Button>
            </Col>
            <Col span={2}>
              <Button onClick={() => onLike(item)}>Like {item.likeCount}</Button>
            </Col>
          </Row>
        )
      }
    </div >
  )
}
