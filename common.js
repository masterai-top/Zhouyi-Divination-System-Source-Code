async function checkIsVip() {
  const userInfoResp = await sendRequest({
    url: `api/user/getUserInfo`,
    type: `get`
  })
  if (userInfoResp && userInfoResp.data && userInfoResp.data.isMember) {
    $('.user-info-api-img').html('<img src="./images/vip.png" alt="" />')
  }
}

function onOpenVipTips() {
  layer.confirm(
    '仅需1680元VIP即可开启刑冲，奇门遁甲，神煞，紫薇，六爻，大六壬等权限',
    {
      btn: ['立即开启', '取消']
    },
    async function (index, layero) {
      //按钮【按钮一】的回调
      const orderPayResp = await sendRequest({
        url: `api/order/pay`,
        type: `get`
      })

      if (orderPayResp) {
        layer.confirm(
          '是否完成支付？',
          {
            btn: ['已经支付', '未完成']
          },
          async function (index, layero) {
            window.location.reload()
          },
          function (index) {
            layer.close(index)
          }
        )

        let form = orderPayResp
        const div = document.createElement('formdiv')
        div.innerHTML = form
        document.body.appendChild(div)
        for (let index = 0; index < document.forms.length; index++) {
          const element = document.forms[index]
          if (element.name == 'punchout_form') {
            element.setAttribute('target', '_blank')
            element.submit()
            div.remove()
          }
        }
      }
    },
    function (index) {
      layer.close(index)
    }
  )
}

// 退出登录
function logout() {
  layer.confirm('确定要退出登录吗?', function (index) {
    sendRequest({
      method: 'GET',
      url: '/api/user/userLogout'
    }).then(res => {
      if (res.code == 200) {
        window.localStorage.removeItem('token')
        window.localStorage.removeItem('username')
        window.location.href = 'login.html'
      }
      layer.close(index)
    })
  })
}
