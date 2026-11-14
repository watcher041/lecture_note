
## 回転座標系と慣性力

### フーコーの振り子（振り子の運動の3次元への拡張）

これまでは振り子が一つの鉛直面内だけで動く場合を考えた。ここでは、おもりが水平面内の任意の方向に動けるとして3次元に拡張し、地球の自転の効果を調べる。以下、鉛直上向きを $z$ 軸、水平面内に $x, y$ 軸をとる。

**3次元の振り子（球面振り子）**　支点を原点とし、おもりの位置を $\boldsymbol r = (x, y, z)$ とする。糸の張力 $F_T$ は支点向き、すなわち $-\boldsymbol r/l$ の向きに働くので、運動方程式は

$$m\frac{\mathrm{d}^2\boldsymbol r}{\mathrm{d}t^2} = -\frac{F_T}{l}\,\boldsymbol r - mg\,\hat{\boldsymbol z},\qquad x^2+y^2+z^2 = l^2$$

である（$\hat{\boldsymbol z}$ は $z$ 方向の単位ベクトル）。振れが小さいとき、$|x|,\ |y| \ll l$ なので $z \approx -l$ であり、張力は $F_T \approx mg$ としてよい。このとき水平成分は

$$\frac{\mathrm{d}^2x}{\mathrm{d}t^2} = -\omega_0^2\,x,\qquad \frac{\mathrm{d}^2y}{\mathrm{d}t^2} = -\omega_0^2\,y\qquad\left(\omega_0=\sqrt{\frac{g}{l}}\right)$$

となる。$x$ と $y$ は互いに独立な、同じ角振動数の単振動である。たとえば $x$ 方向に $a$ だけ引いて静かに放すと

$$x = a\cos\omega_0 t,\qquad y = 0$$

となり、おもりは $x$ 軸に沿って往復し続ける。つまり、**地球が回っていないなら、振動面は固定されたまま**である。

**地球の自転の効果**　地上は、地球の自転とともに回転する座標系である。角速度 $\boldsymbol\Omega$ で回転する座標系では、運動方程式に慣性力が加わり、速度 $\boldsymbol v$ の物体には

$$\boldsymbol F_{\mathrm{C}} = -2m\,\boldsymbol\Omega\times\boldsymbol v$$

のコリオリ力が働く。ここで地上の座標を、東向きに $x$、北向きに $y$、鉛直上向きに $z$ とし、緯度を $\varphi$ とする。地球の自転の角速度の大きさを $\Omega = 2\pi/(1\text{恒星日}) \approx 7.29\times10^{-5}\ \mathrm{rad/s}$ とすると、

$$\boldsymbol\Omega = \Omega\,(0,\ \cos\varphi,\ \sin\varphi)$$

である。これを使ってコリオリ力の成分を計算すると、

$$\frac{\boldsymbol F_{\mathrm{C}}}{m} = \left(2\Omega\sin\varphi\,\dot y - 2\Omega\cos\varphi\,\dot z,\ \ -2\Omega\sin\varphi\,\dot x,\ \ 2\Omega\cos\varphi\,\dot x\right)$$

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