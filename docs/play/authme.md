---
prev:
  text: 网易基岩版（豆皮运营）
  link: /join/bedrock-ne.md
next:
    text: 基础指令集
    link: /play/playercommands.md
---
# 注册与登录
## 注册
服务器使用离线模式，正版和离线玩家均可进入服务器。因此，服务器以用户名作为唯一判断依据，实行额外的注册机制。注册后，玩家可以使用注册的密码登录游戏。

进入游戏后，聊天框将会提示：<code><font color="#555555">[</font><font color="#FFAA00">玩家系统</font><font color="#555555">]</font> <font color="#FF5555">初次登录，请注册。输入“/reg <设置密码> <再输入一次>”以注册</font></code>，按照提示输入指令，即可完成注册。`<>`为自行设置的密码，但不要输入`<>`符号。
## 登录
注册后，玩家可以使用注册的密码登录游戏。

进入游戏后，聊天框将会提示：<code><font color="#555555">[</font><font color="#FFAA00">玩家系统</font><font color="#555555">]</font> <font color="#FF5555">请输入“/login <密码>”以登录</font></code>，按照提示输入指令，即可完成登录。`<>`为注册时设置的密码，但不要输入`<>`符号。

也可以使用简化命令：`/l <密码>` 登录游戏。
## 设置密保邮箱
服务器支持设置密保邮箱，以便玩家忘记密码时找回密码。

若未设置邮箱，游戏将会提示：<code><font color="#555555">[</font><font color="#FFAA00">玩家系统</font><font color="#555555">]</font> <font color="#FF5555">请输入“/email add <你的邮箱> <再输入一次以确认>”以添加您的邮箱到此帐号</font></code>，根据提示设置邮箱即可。`<>`为自行设置的邮箱，但不要输入`<>`符号。
## 忘记密码
若忘记密码，可以通过设置的密保邮箱找回密码。

使用命令：`/email recovery <你的邮箱>`，将会发送一封邮件到你的邮箱，按照邮件提示操作即可找回密码。

邮件示例见下：
::: details 点击查看邮件示例

::: normal-demo 

```html
<div class="mail">
    <style>
        .mail td{
            font-family: "Segoe UI", sans-serif;
            text-align: center;
            font-size: 16px;
            color: #718096;
        }
        .mail th, div, p, a, h1, h2, h3, h4, h5, h6{
            font-family: "Segoe UI", sans-serif;
            text-align: center;
            color: #3d4852;
        }
        .mail .mail-content {
            max-width: 100vw;
            padding: 32px;
            box-shadow: 0 15px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.25);
        }
        .mail div{
            background-color: #ffffff;color: #718096;height: 100%;line-height: 1.4;width: 100%;
        }
        .mail .x_wrapper{
            background-color: #edf2f7; 
            width:100%;
        }
        .mail .x_content{
            width: 100%;
        }
        .mail .x_inner-body{
            background-color: #ffffff;border-color: #e8e5ef;border-radius: 2px;border-width: 1px;margin: 0 auto;padding:0;width: 570px;
        }
        .mail .x_content-cell{
            margin: 0 auto;padding: 0;width: 570px;line-height: 1.5em;
            color: #b0adc5;font-size: 12px;
        }
        .mail .x_content-cell td{
            max-width: 100vw;padding: 32px;
        }
    </style>
    <div>
        <table class="x_wrapper">
            <tbody>
            <tr>
                <td>
                    <table class="x_content">
                        <tbody>
                        <tr>
                            <td style="padding: 25px 0;">
                                <h1 style="font-size: 20px;">代码验证邮件</h1>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <table class="x_inner-body">
                                    <tbody>
                                    <tr>
                                        <td class="mail-content">
                                            <h1 style="font-size: 18px;margin-bottom: 25px;">Minecraft · 有兽焉粉丝服<br/>你的昵称</h1>
                                            <hr>
                                            <table style="width: 100%;">
                                                <tbody>
                                                <tr>
                                                    <td>
                                                        您正在申请的验证码为
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="font-weight: bold;">
                                                        <br/>114514</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <br/>使用指令: /email code 114514 来完成验证过程.
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="text-align:right;">
                                                        <br/>
                                                        <br/>验证码将在4小时后失效
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <small>
                                                            <br/>2024年01月16日 14:44:59
                                                            <br/>请勿回复
                                                        </small>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <table class="x_content-cell">
                                    <tbody>
                                    <tr>
                                        <td>
                                            <p style="color:#b0adc5;">© 2024 有兽焉粉丝服务器. All rights reserved.</p>
                                            <a href="mc.zorua.top" target="_blank"
                                               style="text-decoration: none; font-size: 16px">Made with ❤ by 海屿有燕</a>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</div>
```

:::
按照提示操作即可找回密码。
## 进阶：使用2FA
服务器支持使用2FA（双因素认证）以增强账户安全性。

关于2FA的设置与使用，请使用命令：`/2fa` 或 `/totp` 查看帮助，由于2FA的设置与使用较为复杂，因此不在此处详细介绍。
## 其他命令
| 指令        | 用法                                  |指令描述                    |
|-------------|--------------------------------------|----------------------------|
| `/reg`      | `/reg 密码 再输入一次`                | 注册游戏                    |
| `/l`        | `/l 密码`                            | 登录游戏                    |
| `/logout`   | ------                               | 登出游戏，不会自动退出       |
| `/captcha`  | `/captcha 验证码`                     | 敏感操作按提示操作输入验证码 |
| `/email`    | `/email add/code/...`                | 邮箱相关功能                |
| `/2fa`      | `/2fa ...`                            | 2FA相关功能                |
| `/changepassword` | `/changepassword 旧密码 新密码` | 修改密码                   |
| ... | ... | ... |
