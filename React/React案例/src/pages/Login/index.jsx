import React, { Component, Fragment } from 'react';
import { NavBar, InputItem, Button, Toast } from 'antd-mobile';
import { phoneReg, codeReg } from '../../config/reg';
import { codeTime } from '../../config/constant';
import {reqVerifyCode} from '../../ajax/verify';
import {reqLogin} from '../../ajax/login';
import './index.less';

export default class Login extends Component {
    state = {
        phone: '', //存储手机号
        code: '',//存储验证码
        canClick: true, //标识按钮是否可以点击
        time: codeTime //按钮等待时间
    }
    // 登录按钮的回调
    login = async() => {
        const { phone, code } = this.state;
        this.phoneError = false;
        this.codeError = false;
        if (!phone) this.phoneError = true;
        if (!code) this.codeError = true;
        let errorMsg = '';
        errorMsg += this.phoneError ? '手机' : '';
        errorMsg += this.codeError ? '验证码' : '';
        if (errorMsg) return Toast.fail('请输入合法的' + errorMsg);

        //console.log('输入的手机号是 ' + phone, '输入的验证码是 ' + code);
        //请求登录
        try {
            const{data} =await reqLogin(phone,code);
            if(data.code===20000){
                Toast.success(data.message, 2);
                this.props.history.push('/user')
            }
            else if(data.code!==20000){Toast.fail(data.message, 2)}
        } catch (error) {
            console.log(error.message);
            Toast.fail('网络不通,稍后再试@');
        }
    }
    // 保存用户输入的数据
    saveData = (type) => {
        return (value) => {
            if (type === 'phone' && !phoneReg.test(value)) value = '';
            else if (type === 'code' && !codeReg.test(value)) value = '';
            this.setState({ [type]: value })
        }
    }
    // 获取验证码的回调
    getCode = async() => {
        //获取state中按钮的状态,时间
        const { phone, canClick } = this.state;
        //判断按钮是否可以点击
        if (!canClick) return;
        //若手机号为空
        else if (!phone) return Toast.fail('请输入合法的手机号', 2);
        //让按钮不可点击
        this.setState({ canClick: false });
        //开启定时器--更新时间
        this.timeId = setInterval(() => {
            const { time } = this.state;
            //更新状态中的时间
            this.setState({ time: time - 1 });
            //如果时间小于0,清除定时器,让按钮再次可以点击
            if (time <= 0) {
                //清除定时器
                clearInterval(this.timeId);
                //按钮消除disabled状态
                this.setState({ canClick: true, time: codeTime });
            }
        }, 1000)
        //console.log('发送请求获取验证码');
        
        
        try {
            const {data}=await reqVerifyCode(phone);
            //const{data:{code}}=await reqVerifyCode(phone);
            if(data.code===20000) Toast.success(data.message, 2);
            else if(data.code!==20000) Toast.fail(data.message, 2);
        } catch (error) {
            Toast.fail('网络不通,稍后重试',2);
            clearTimeout(this.timeId);
            this.setState({canClick:true, time:codeTime});
        }
        // axios.post('/login/digits',{phone}).then(
        //     response=>{
        //         const{code,message}=response.data;
        //         if(code===20000) Toast.success(message, 2);
        //         else if(code!==20000) Toast.fail(message, 2);
        //     },
        //     error=>{
        //         Toast.fail('网络不通,稍后再试', 2);
        //         clearTimeout(this.timeId);
        //         this.setState({canClick:true, time:codeTime});
        //     }
        // )
    }
    componentWillUnmount(){
        clearInterval(this.timeId);
    }
    render() {
        const { canClick, time } = this.state;
        return (
            <Fragment>
                {/* 顶部导航区 */}
                <NavBar mode="light">手机验证码登录</NavBar>
                {/* 内容区 */}
                <div className="login-wraper">
                    {/* 手机号输入区 */}
                    <InputItem
                        clear
                        placeholder="请输入手机号"
                        onChange={this.saveData('phone')}
                    />
                    {/* 验证码输入区 */}
                    <div className="code-group">
                        <InputItem
                            clear
                            placeholder="6位验证码"
                            onChange={this.saveData('code')}
                        />
                        <button
                            className={canClick ? "get-code-btn active" : "get-code-btn disable"}
                            onTouchEnd={this.getCode}
                        >获取验证码{canClick ? '' : `(${time})`}
                        </button>
                    </div>
                    {/* 登录按钮 */}
                    <Button type='primary' onTouchEnd={this.login}>登录</Button>
                    {/* 底部说明区域 */}
                    <div className="footer">
                        未注册的手机号，验证后会自动创建硅谷账号，登录即代表您同意
						<a href="http://www.XXXXXX.com">《XXX隐私政策》</a>
                    </div>
                </div>
            </Fragment>
        )
    }
}
