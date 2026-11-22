
## 回転座標系と慣性力

前回、振り子が一つの鉛直面内だけで動く場合を考えた。ここでは、おもりが水平面内の任意の方向に動けるとして3次元に拡張し、その運動を調べてみることにする。以下、鉛直上向きを $z$ 軸、水平面内に $x, y$ 軸をとる。支点を原点とし、おもりの位置を $\bm r = (x, y, z)$ とする。糸の張力 $F_T$ は支点向き、すなわち $-\bm r/l$ の向きに働くので、運動方程式は

$$m\frac{\mathrm{d}^2\bm r}{\mathrm{d}t^2} = -\frac{F_T}{l}\,\bm r - mg\,\hat{\bm z},\qquad x^2+y^2+z^2 = l^2$$

である（$\hat{\bm z}$ は $z$ 方向の単位ベクトル）。振れが小さいとき、$|x|,\ |y| \ll l$ なので $z \approx -l$ であり、張力は $F_T \approx mg$ としてよい。このとき水平成分は

$$\frac{\mathrm{d}^2x}{\mathrm{d}t^2} = -\omega_0^2\,x,\qquad \frac{\mathrm{d}^2y}{\mathrm{d}t^2} = -\omega_0^2\,y\qquad\left(\omega_0=\sqrt{\frac{g}{l}}\right)$$

となる。$x$ と $y$ は互いに独立な、同じ角振動数の単振動である。たとえば $x$ 方向に $a$ だけ引いて静かに放すと

$$x = a\cos\omega_0 t,\qquad y = 0$$

となり、おもりは $x$ 軸に沿って往復し続ける。しかし、実際は**フーコーの振り子**でも知られているように軸上を段々とずれていくことが分かる。これは地球の自転によるものとなっている。

地上は地球の自転とともに回転する座標系である。その変換式としては以下の通りとなる。

$$
    x'=
    x\sin\theta\cos\phi+
    y\sin\theta\sin\phi+
    z\cos\theta
$$
$$
    y'=
    x\cos\theta\cos\phi+
    y\cos\theta\sin\phi-
    z\sin\theta
$$
$$
    z'=
    -x\sin\phi+y\cos\phi
$$

これらの変換式を時間微分することで

$$
    v_x'=
    v_x\sin\theta\cos\phi+
    v_y\sin\theta\sin\phi+
    v_z\cos\theta
$$
$$
    v_y'=
    v_x\cos\theta\cos\phi+
    v_y\cos\theta\sin\phi-
    v_z\sin\theta
$$
$$
    v_z'=
    -v_x\sin\phi+v_y\cos\phi
$$




$$
    a_{x'}=
    a_x\sin\theta\cos\phi+
    a_y\sin\theta\sin\phi+
    a_z\cos\theta
$$
$$
    a_{y'}=
    a_x\cos\theta\cos\phi+
    a_y\cos\theta\sin\phi-
    a_z\sin\theta
$$
$$
    a_{z'}=
    -a_x\sin\phi+a_y\cos\phi
$$

$$
    a_{x'}=
    \dd{^2r}{t^2}-
    r
    \lr{
        \dd{\theta}{t}
    }^2-
    r
    \lr{
        \dd{\phi}{t}
    }^2
    \sin^2\theta
$$
$$
    a_{y'}=
    r
    \dd{^2\theta}{t^2}+
    2
    \dd{r}{t}
    \dd{\theta}{t}-
    r
    \lr{
        \dd{\phi}{t}
    }^2
    \sin\theta\cos\theta
$$
$$
    a_{z'}=
    2\dd{r}{t}
    \dd{\phi}{t}
    \sin\theta+
    2r\dd{\theta}{t}
    \dd{\phi}{t}
    \cos\theta+
    r\dd{^2\phi}{t^2}
    \sin\theta
$$


角速度 $\bm\Omega$ で回転する座標系では、運動方程式に慣性力が加わり、速度 $\bm v$ の物体には

$$\bm F_{\mathrm{C}} = -2m\,\bm\Omega\times\bm v$$

のコリオリ力が働く。ここで地上の座標を、東向きに $x$、北向きに $y$、鉛直上向きに $z$ とし、緯度を $\varphi$ とする。地球の自転の角速度の大きさを $\Omega = 2\pi/(1\text{恒星日}) \approx 7.29\times10^{-5}\ \mathrm{rad/s}$ とすると、

$$\bm\Omega = \Omega\,(0,\ \cos\varphi,\ \sin\varphi)$$

である。これを使ってコリオリ力の成分を計算すると、

$$\frac{\bm F_{\mathrm{C}}}{m} = \left(2\Omega\sin\varphi\,\dot y - 2\Omega\cos\varphi\,\dot z,\ \ -2\Omega\sin\varphi\,\dot x,\ \ 2\Omega\cos\varphi\,\dot x\right)$$

となる。微小振動では $\dot z$ は $\dot x,\ \dot y$ に比べてずっと小さいので $\dot z$ を含む項は無視でき、$z$ 方向の項は重力や張力に比べて極めて小さいので無視できる。（遠心力も小さく、重力加速度 $g$ の中に含めて考えてよい。）残るのは水平成分で、

$$\frac{\mathrm{d}^2x}{\mathrm{d}t^2} = -\omega_0^2x + 2\Omega_z\,\dot y,\qquad \frac{\mathrm{d}^2y}{\mathrm{d}t^2} = -\omega_0^2y - 2\Omega_z\,\dot x,\qquad \Omega_z \equiv \Omega\sin\varphi$$

となる。

**方程式を解く**　$x$ と $y$ が絡み合っているので、複素数 $u = x + \mathrm{i}y$ を使ってまとめる。第1式と第2式の $\mathrm{i}$ 倍を足すと、

$$\ddot u = -\omega_0^2u - 2\mathrm{i}\,\Omega_z\dot u$$

つまり

$$\ddot u + 2\mathrm{i}\,\Omega_z\dot u + \omega_0^2u = 0$$

となる。ここで $u = \mathrm{e}^{-\mathrm{i}\Omega_zt}\,w$ と置くと、

$$\ddot w + \left(\omega_0^2 + \Omega_z^2\right)w = 0$$

となり、$w$ は単振動の方程式を満たす。$\Omega_z \ll \omega_0$ なので $w$ の角振動数は $\omega_0$ とみなしてよい。

初期条件として、$x$ 軸方向（東）に $a$ だけ引いて静かに放す場合、$u(0)=a$、$\dot u(0)=0$ であり、解は

$$u(t) \approx a\cos(\omega_0t)\,\mathrm{e}^{-\mathrm{i}\Omega_zt}$$

となる。実部と虚部に分けると、

$$x(t) = a\cos\omega_0t\cdot\cos\Omega_zt,\qquad y(t) = -a\cos\omega_0t\cdot\sin\Omega_zt$$

である。

**結果の解釈**　この解は、$\cos\omega_0t$ で往復運動しながら、その運動の向きが $x$ 軸から角度 $-\Omega_zt$ だけ回転していくことを表す。つまり、振動面は一定の角速度

$$\Omega_z = \Omega\sin\varphi$$

で回転する。北半球では（上から見て）時計回り、南半球では反時計回りで、赤道では回転しない。振動面が一周する時間は

$$T_{\mathrm{F}} = \frac{2\pi}{\Omega\sin\varphi} = \frac{1\text{恒星日}}{\sin\varphi}$$

である。極（$\varphi = 90^\circ$）では約1日、緯度 $35^\circ$ では $\sin 35^\circ \approx 0.57$ なので約42時間かかる。

なお、慣性系から見ると、振り子は同じ鉛直面内で振動し続けているだけで、その面の下で地球が自転している。地上にいる私たちから見ると、この面が逆向きに回って見える。