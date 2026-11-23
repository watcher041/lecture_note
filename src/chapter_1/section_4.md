
## 回転座標系と慣性力

前回、振り子が一つの鉛直面内だけで動く場合を考えた。ここでは、おもりが水平面内の任意の方向に動けるとして3次元に拡張し、その運動を調べてみることにする。以下、鉛直上向きを $z$ 軸、水平面内に $x, y$ 軸をとる。支点を原点とし、おもりの位置を $\bm r = (x, y, z)$ とする。また、おもりの質量を $m$、重力加速度を $g$、張力を $F_T$ とすると、各成分の運動方程式は



糸の張力 $F_T$ は支点向き、すなわち $-\bm r/l$ の向きに働くので、運動方程式は

$$m\frac{\mathrm{d}^2\bm r}{\mathrm{d}t^2} = -\frac{F_T}{l}\,\bm r - mg\,\hat{\bm z}、x^2+y^2+z^2 = l^2$$

である（$\hat{\bm z}$ は $z$ 方向の単位ベクトル）。振れが小さいとき、$|x|,\ |y| \ll l$ なので $z \approx -l$ であり、張力は $F_T \approx mg$ としてよい。このとき水平成分は

$$\frac{\mathrm{d}^2x}{\mathrm{d}t^2} = -\omega_0^2\,x、\frac{\mathrm{d}^2y}{\mathrm{d}t^2} = -\omega_0^2\,y\qquad\left(\omega_0=\sqrt{\frac{g}{l}}\right)$$

となる。$x$ と $y$ は互いに独立な、同じ角振動数の単振動である。たとえば $x$ 方向に $a$ だけ引いて静かに放すと

$$x = a\cos\omega_0 t、y = 0$$

となり、おもりは $x$ 軸に沿って往復し続ける。しかし、実際は**フーコーの振り子**でも知られているように軸上を段々とずれていくことが分かる。これは地球の自転によるものとなっている。

ニュートンの運動方程式は、慣性の法則が成り立つ座標系いわゆる**慣性系**（静止している、または等速直線運動をしている座標系）で成り立つ。一方で、地上は地球とともに地軸を中心として回転しているので、厳密には慣性系に当てはまらない。そこで、一つの軸を中心に回転している座標系から見ると運動方程式がどう変わるかを見てみよう。その前に、まず地上のある地点と地軸とのなす角を $\alpha$ として、$z$ 軸が地軸と一致するようにとりなおす。ここで $x$ 軸のまわりに角 $\alpha$ だけ回した座標を $(x',y',z')$ とすると、

$$
    x'=x、
    y'=y\cos\alpha+z\sin\alpha、
    z'=-y\sin\alpha+z\cos\alpha
$$

であり、力の成分 $(F'_x,F'_y,F'_z)$ も同じ式で変換される。$\alpha$ は定数なので、時間で2回微分した $\ddot{y}$ なども同じ式で変換され、

$$
    m\ddot{y'}=
    m(\ddot y\cos\alpha+\ddot z\sin\alpha)=
    F_y\cos\alpha+F_z\sin\alpha=F'_y
$$

となる。$x',z'$ についても同様なので、$m\ddot{x'}=F'_x$、$m\ddot{z'}=F'_z$ が成り立つ。そのため、運動方程式の形が変わらず慣性系となっていることが分かる。これを踏まえた上で、次に置き換えた慣性系を K として座標系 K' を K と原点を共有しており $z'$ 軸のまわりに一定の角速度 $\omega$ で回転する座標 $(X,Y,Z)$ で見ているものとする。K' の軸は、K の軸に対して時刻 $t$ に角 $\omega t$ だけ反時計回りに回っている。同じ点を K' から見ると、座標は逆に時計回りに回って見えるので、

$$
    X=x'\cos\omega t+y'\sin\omega t、
    Y=-x'\sin\omega t+y'\cos\omega t、
    Z=z'
$$

である。 K' の軸に沿った成分は

$$
    F_X=F'_x\cos\omega t+F'_y\sin\omega t、F_Y=-F'_x\sin\omega t+F'_y\cos\omega t、
    F_Z=F'_z
$$

である。そして、各成分を時間で微分すると

$$
    \dot X=
    (\dot x'\cos\omega t+\dot y'\sin\omega t)+
    \omega(-x'\sin\omega t+y'\cos\omega t)=
    (\dot x'\cos\omega t+\dot y'\sin\omega t)+
    \omega Y
$$

$$
    \dot Y=
    (-\dot x'\sin\omega t+\dot y'\cos\omega t)+
    \omega(-x'\cos\omega t-y'\sin\omega t)=
    (-\dot x'\sin\omega t+\dot y'\cos\omega t)-
    \omega X
$$

$$
    \dot Z=\dot z'
$$

となる。そして、もう一度微分すると

$$
    \ddot X=
    (\ddot x'\cos\omega t+\ddot y'\sin\omega t)+
    \omega(-\dot x'\sin\omega t+\dot y'\cos\omega t)+
    \omega\dot Y=
    (\ddot x'\cos\omega t+\ddot y'\sin\omega t)+
    2\omega\dot Y+\omega^2X
$$
$$
    \ddot Y=
    (-\ddot x'\sin\omega t+\ddot y'\cos\omega t)-
    \omega(\dot x'\cos\omega t+\dot y'\sin\omega t)-
    \omega\dot x'=
    (-\ddot x'\sin\omega t+\ddot y'\cos\omega t)-
    2\omega\dot X+\omega^2Y
$$
$$
    \ddot Z=\ddot z'
$$ 

となる。慣性系 K では $m\ddot x'=F'_x,\ m\ddot y'=F'_y,\ m\ddot z'=F'_z$ が成り立つ。したがって

$$
    m(\ddot x'\cos\omega t+\ddot y'\sin\omega t)=
    F'_x\cos\omega t+F'_y\sin\omega t=
    F_X
$$
$$
    m(-\ddot x'\sin\omega t+\ddot y'\cos\omega t)=
    F_Y
$$

である。これを上の2式に代入して $m$ をかけると、K' での運動方程式は

$$
\begin{aligned}
    m\ddot X&=
    F_X+2m\omega\,\dot Y+m\omega^2X\\
    m\ddot Y&=
    F_Y-2m\omega\,\dot X+m\omega^2Y\\
    m\ddot Z&=
    F_Z
\end{aligned}
$$

となる。回転座標系で運動を見ると、実際に働く力 $F$ のほかに、2種類の項が加わったように見える。

- **コリオリ力** $\bigl(2m\omega\dot y',\ -2m\omega\dot x',\ 0\bigr)$：速度 $(\dot x',\dot y')$ と内積をとると $2m\omega(\dot x'\dot y'-\dot y'\dot x')=0$ になるので、速度に垂直な向きである。回転座標系で動いている物体にだけ働き、仕事をしない。
- **遠心力** $\bigl(m\omega^2x',\ m\omega^2y',\ 0\bigr)$：回転軸（$z'$ 軸）から遠ざかる向きで、大きさは軸からの距離 $\sqrt{x'^2+y'^2}$ に比例する。止まっている物体にも働く。

これらは、物体どうしの相互作用から生じる力ではなく、回転する座標系から見たために現れる**慣性力**（見かけの力）である。コリオリ力の成分を、$\boldsymbol{\omega}=(0,0,\omega)$ と速度 $\boldsymbol{v}'$ の外積 $-2m\boldsymbol{\omega}\times\boldsymbol{v}'$ の成分と見比べると、一致することが確認できる。


**地球に当てはめる**　地上の座標系を、地球の自転とともに回る座標系とみなす（地球の公転は無視する）。自転の角速度の大きさは $\omega=2\pi/(1\text{恒星日})\approx7.29\times10^{-5}\ \mathrm{rad/s}$ である。ここでは自転軸が $z$ 軸ではなく傾いているので、座標軸をとり直す。

まず、(4) 式の $(x',y',z')$ を、自転軸に沿った座標 $(X,Y,Z)$ に読み替える。$Z$ 軸を自転軸（北極の向き）、$X$ 軸を観測点での東向きにとり、$Y$ 軸は右手系になるように選ぶ。すると (4) 式のコリオリ力は

$$
\text{コリオリ力}=\bigl(2m\omega\dot Y,\ -2m\omega\dot X,\ 0\bigr)
$$

となる。

次に、これを地上の座標 $(x,y,z)$（東向きに $x$、北向きに $y$、鉛直上向きに $z$）で表す。緯度を $\varphi$ とする。自転軸は子午面（南北と鉛直を含む面）の中にあり、地上から見ると、北向きに $\cos\varphi$、鉛直上向きに $\sin\varphi$ の割合で伸びている。東向きの軸は共通なので、速度の成分は

$$
\dot X=\dot x,\qquad
\dot Y=\dot y\sin\varphi-\dot z\cos\varphi,\qquad
\dot Z=\dot y\cos\varphi+\dot z\sin\varphi
$$

と変換される。逆に、自転軸に沿った成分 $(V_X,V_Y,V_Z)$ をもつ量の、地上の成分は

$$
V_x=V_X、V_y=V_Y\sin\varphi+V_Z\cos\varphi、V_z=-V_Y\cos\varphi+V_Z\sin\varphi
$$

である。これをコリオリ力 $(V_X,V_Y,V_Z)=(2m\omega\dot Y,\,-2m\omega\dot X,\,0)$ に当てはめると、

$$
\begin{aligned}
V_x&=2m\omega\dot Y=2m\omega\,(\dot y\sin\varphi-\dot z\cos\varphi)\\
V_y&=-2m\omega\dot X\sin\varphi=-2m\omega\sin\varphi\,\dot x\\
V_z&=2m\omega\dot X\cos\varphi=2m\omega\cos\varphi\,\dot x
\end{aligned}
$$

となる。すなわち地上でのコリオリ力は

$$
\frac{F_{\mathrm{C}}}{m}=\bigl(2\omega\sin\varphi\,\dot y-2\omega\cos\varphi\,\dot z,\ \ -2\omega\sin\varphi\,\dot x,\ \ 2\omega\cos\varphi\,\dot x\bigr)
$$

である。

遠心力については、地球の中心から測った位置のうち一定の部分による項は、重力と合わせて「重力加速度 $g$」の中に含めてよい。残りの項は、$r/R$ 程度（$R$ は地球の半径、約 $6.4\times10^6\ \mathrm{m}$）しかないので、振り子のような小さな運動では無視できる。一方、コリオリ力は速度だけで決まり、原点の位置にはよらない。

水平方向の運動だけを見ると（$\dot z$ を含む項を無視すると）、$\omega_z=\omega\sin\varphi$ として水平成分は $2\omega_z(\dot y,\,-\dot x)$ である。これは、水平な速度 $(\dot x,\dot y)$ を時計回りに $90^\circ$ 回した向きなので、北半球では、動く物体が進行方向に対して右へ曲げられる。南半球では $\omega_z<0$ になり、左へ曲げられる。赤道では水平方向の力は働かない。



角速度 $\bm\omega$ で回転する座標系では、運動方程式に慣性力が加わり、速度 $\bm v$ の物体には

$$\bm F_{\mathrm{C}} = -2m\,\bm\omega\times\bm v$$

のコリオリ力が働く。ここで地上の座標を、東向きに $x$、北向きに $y$、鉛直上向きに $z$ とし、緯度を $\varphi$ とする。地球の自転の角速度の大きさを $\omega = 2\pi/(1\text{恒星日}) \approx 7.29\times10^{-5}\ \mathrm{rad/s}$ とすると、

$$\bm\omega = \omega\,(0,\ \cos\varphi,\ \sin\varphi)$$

である。これを使ってコリオリ力の成分を計算すると、

$$\frac{\bm F_{\mathrm{C}}}{m} = \left(2\omega\sin\varphi\,\dot y - 2\omega\cos\varphi\,\dot z,\ \ -2\omega\sin\varphi\,\dot x,\ \ 2\omega\cos\varphi\,\dot x\right)$$

となる。微小振動では $\dot z$ は $\dot x,\ \dot y$ に比べてずっと小さいので $\dot z$ を含む項は無視でき、$z$ 方向の項は重力や張力に比べて極めて小さいので無視できる。（遠心力も小さく、重力加速度 $g$ の中に含めて考えてよい。）残るのは水平成分で、

$$\frac{\mathrm{d}^2x}{\mathrm{d}t^2} = -\omega_0^2x + 2\omega_z\,\dot y、\frac{\mathrm{d}^2y}{\mathrm{d}t^2} = -\omega_0^2y - 2\omega_z\,\dot x、\omega_z \equiv \omega\sin\varphi$$

となる。

**方程式を解く**　$x$ と $y$ が絡み合っているので、複素数 $u = x + \mathrm{i}y$ を使ってまとめる。第1式と第2式の $\mathrm{i}$ 倍を足すと、

$$\ddot u = -\omega_0^2u - 2\mathrm{i}\,\omega_z\dot u$$

つまり

$$\ddot u + 2\mathrm{i}\,\omega_z\dot u + \omega_0^2u = 0$$

となる。ここで $u = \mathrm{e}^{-\mathrm{i}\omega_zt}\,w$ と置くと、

$$\ddot w + \left(\omega_0^2 + \omega_z^2\right)w = 0$$

となり、$w$ は単振動の方程式を満たす。$\omega_z \ll \omega_0$ なので $w$ の角振動数は $\omega_0$ とみなしてよい。

初期条件として、$x$ 軸方向（東）に $a$ だけ引いて静かに放す場合、$u(0)=a$、$\dot u(0)=0$ であり、解は

$$u(t) \approx a\cos(\omega_0t)\,\mathrm{e}^{-\mathrm{i}\omega_zt}$$

となる。実部と虚部に分けると、

$$x(t) = a\cos\omega_0t\cdot\cos\omega_zt、y(t) = -a\cos\omega_0t\cdot\sin\omega_zt$$

である。

**結果の解釈**　この解は、$\cos\omega_0t$ で往復運動しながら、その運動の向きが $x$ 軸から角度 $-\omega_zt$ だけ回転していくことを表す。つまり、振動面は一定の角速度

$$\omega_z = \omega\sin\varphi$$

で回転する。北半球では（上から見て）時計回り、南半球では反時計回りで、赤道では回転しない。振動面が一周する時間は

$$T_{\mathrm{F}} = \frac{2\pi}{\omega\sin\varphi} = \frac{1\text{恒星日}}{\sin\varphi}$$

である。極（$\varphi = 90^\circ$）では約1日、緯度 $35^\circ$ では $\sin 35^\circ \approx 0.57$ なので約42時間かかる。

なお、慣性系から見ると、振り子は同じ鉛直面内で振動し続けているだけで、その面の下で地球が自転している。地上にいる私たちから見ると、この面が逆向きに回って見える。