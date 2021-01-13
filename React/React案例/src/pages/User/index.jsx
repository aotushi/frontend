import React, { Component } from 'react';
import { reqVerifyLogin } from '../../ajax/verify';
import { Toast } from 'antd-mobile';

export default class User extends Component {
    async componentDidMount() {
        try {
            const { data } = await reqVerifyLogin();
            if (data.code !== 20000) {
                Toast.fail('用户未登录,请先登录', 2);
                this.props.history.replace('/login');
            }
        } catch (error) {
            Toast.fail('网络错误,稍后重试@@', 2);
        }
    }
    render() {
        return (
            <div>
                我是User组件
            </div>
        )
    }
}
