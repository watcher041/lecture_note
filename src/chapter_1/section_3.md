
## 力による運動の記述

ここからは、どのような力が働くかを考慮したうえで各場面での運動を記述してみることにする。いずれの場合も、質点の質量を $m$ 、位置ベクトルを $\bm{r}$ 、働く力を $\bm{F}$ とした運動方程式

$$
    m\dd{^2\bm{r}}{t^2}=\bm{F}
$$

をもとにしていることに注意すること。

### 並進運動（摩擦力を伴う運動）

粗い水平面上で、物体（質量 $m$）に水平方向の力 $F$ を加えて動かす場合を考える。物体は鉛直方向には動かないので、垂直抗力は $F_N = mg$ である。水平方向については、$F$ が小さいと物体は静止したまま動かない。これは、押す力 $F$ とちょうど同じ大きさで逆向きの摩擦力（**静止摩擦力**）が働き、力がつり合っているからである。静止摩擦力の大きさは一定ではなく、加えた力に応じて変わる。物体が静止している間は加速度が $0$ なので、静止摩擦力を $F_W$ とすると

$$0 = F - F_W \Rightarrow F_W = F$$

となり、$F$ を大きくすれば $F_W$ も同じだけ大きくなる。ただし、静止摩擦力には上限（**最大静止摩擦力**）があり、この値は静止摩擦係数を $\mu$ とすると

$$F_{W\max} = \mu F_N = \mu mg$$

で与えられる。したがって、静止摩擦力について成り立つのは

$$F_W \le \mu F_N$$

という不等式であり、動き出す直前の瞬間だけ $F_W = \mu F_N$ が成り立つ。そして、物体が動き出すと今度は運動と逆向きに動摩擦力が働くようになる。この値は、動摩擦係数を $\mu'$ とすると $\mu'F_N = \mu'mg$ となり、運動方程式は水平方向の右向きを正の $x$ 軸として

$$
    m\dd{^2x}{t^2} = 
    F - \mu' mg
$$

という形になる。一般に同じ面では $\mu > \mu'$ であり、動き出すと摩擦力が少し小さくなる。

### 鉛直運動（重力を伴う運動）

鉛直上向きを正の $y$ 軸とし、重力だけが働く場合、
$$
m\dd{^2y}{t^2}=-mg
$$
である。そして、初期条件を $y(0)=y_0,\ v(0)=v_0$ として積分すると、

$$
    v=v_0-gt、y=y_0+v_0t-\frac{1}{2}gt^2
$$

が得られ、時間を消去すれば以下の通りとなる。

$$
    v^2-v_0^2=-2g(y-y_0)
$$

### 斜面上の運動（並進方向と鉛直方向の運動1）

水平面と角 $\theta$ をなす斜面上に、質量 $m$ の物体を置いた場合を考える。斜面に沿って下向きに $x$ 軸、斜面に垂直な向きに $y$ 軸をとる。物体に働く力は、重力 $mg$（鉛直下向き）と、斜面からの垂直抗力 $F_N$ である。重力は斜面に平行な成分と垂直な成分に分解でき、

- 斜面方向（下向き）： $mg\sin\theta$
- 斜面に垂直な方向（斜面を押す向き）： $mg\cos\theta$

となる。まず、斜面に垂直な方向では物体は動かないので

$$
    F_N = mg\cos\theta
$$

となる。斜面方向も傾きが小さいときには下向きの力が小さくなり動かないため、

$$
    0=mg\sin\theta-F_w
    \rightarrow
    F_W=mg\sin\theta
$$

であるが、傾きがある角度 $\theta_0$（**摩擦角**） のとき静止摩擦力が最大 $\mu F_N$ となるため、

$$
    0=mg\sin\theta_0-\mu F_N
    \Rightarrow 
    \mu=\tan\theta_0
$$

となる。そして、傾きが大きくなると物体が動き出し動摩擦係数を $\mu'$ とすると、運動方程式は

$$
    m\frac{d^2x}{dt^2} = 
    mg\sin\theta - \mu' mg\cos\theta \Rightarrow 
    \frac{d^2x}{dt^2} = 
    g(\sin\theta - \mu'\cos\theta)
$$

であり、初期値を $x(0)=0,\ v(0)=0$ として積分すると、

$$
    v = gt(\sin\theta - \mu'\cos\theta)、
    x = \frac{1}{2}gt^2(\sin\theta - \mu'\cos\theta)
$$

が得られる。


### 振り子の運動（並進方向と鉛直方向の運動2）

長さ $l$ の糸に質量 $m$ のおもりをつけた場合を考える。糸の上端（支点）を原点とし、水平右向きに $x$ 軸、鉛直上向きに $y$ 軸をとる。鉛直線からの角度を $\theta$ とすると、おもりの位置は

$$x = l\sin\theta,\qquad y = -l\cos\theta$$

と表される。ここで $x^2 + y^2 = l^2$ であり、おもりは糸の長さを半径とする円周上しか動けない。おもりに働く力は、重力 $mg$（下向き）と糸の張力 $F_T$（糸に沿って支点向き）である。張力の向きは支点の方向なので、成分は $(-F_T\sin\theta,\ F_T\cos\theta)$ となる。したがって、$x$ 方向と $y$ 方向の運動方程式は

$$
    m\dd{^2x}{t^2} = 
    -F_T\sin\theta、
    m\dd{^2y}{t^2} = 
    F_T\cos\theta - mg
$$

である。ところが、未知数が $x,\ y,\ F_T$ の三つあるのに式は二つしかない。これを補うのが、おもりが円周上を動くという条件 $x = l\sin\theta,\ y = -l\cos\theta$ であるため、まずこれらの式を $t$ で2回微分すると、

$$
    \dd{^2x}{t^2} = 
    l\cos\theta\,\ddot\theta - l\sin\theta\,
    \dot\theta^2、
    \dd{^2y}{t^2} = 
    l\sin\theta\,
    \ddot\theta + l\cos\theta\,\dot\theta^2
$$
$$
    \dot\theta = \dd{\theta}{t}、
    \ddot\theta = \dd{^2\theta}{t^2}
$$

となる。そして、$x$ 方向の式に $\cos\theta$、$y$ 方向の式に $\sin\theta$ をかけて足すと、

$$
    m\left(\dd{^2x}{t^2}\cos\theta + 
    \dd{^2y}{t^2}\sin\theta\right) = -F_T\sin\theta\cos\theta + 
    F_T\cos\theta\sin\theta - 
    mg\sin\theta = 
    -mg\sin\theta
$$

となり、右辺から $F_T$ が消える。左辺に前の結果を代入すると、$\dot\theta^2$ の項も打ち消し合って $ml\ddot\theta$ だけが残るので、

$$ml\dd{^2\theta}{t^2} = -mg\sin\theta$$

が得られる。これが接線方向の運動方程式である。右辺は、重力の接線方向の成分 $-mg\sin\theta$ に等しい（斜面上の運動で、重力を斜面方向に分解したのと同じ考え方である）。今度は $x$ 方向の式に $-\sin\theta$、$y$ 方向の式に $\cos\theta$ をかけて足すと、

$$F_T = mg\cos\theta + ml\dot\theta^2$$

が得られる。糸の張力は、重力の糸方向の成分に、円運動のための項 $ml\dot\theta^2$ を加えたものになる。

ここで、仮に振れ角 $\theta$ が小さいとき、$\sin\theta$ は $\theta$ で近似できる。実際、テイラー展開すると

$$\sin\theta = \theta - \frac{\theta^3}{6} + \cdots$$

であり、たとえば $\theta = 0.1\ \mathrm{rad}$（約 $6^\circ$）なら $\sin\theta = 0.09983\cdots$ で、$\theta$ との差は約 $0.2\%$ である。そこで $\sin\theta \approx \theta$ とおくと、

$$
    \frac{\mathrm{d}^2\theta}{\mathrm{d}t^2} = 
    -\frac{g}{l}\,\theta
$$

となる。$\omega = \sqrt{g/l}$ とおけば

$$\frac{\mathrm{d}^2\theta}{\mathrm{d}t^2} = -\omega^2\theta$$

であり、これは単振動の方程式である。一般解は

$$
    \theta(t) = A\cos(\omega t + \phi)
$$

（$A,\ \phi$ は定数）である。実際、

$$
    \dfrac{\mathrm{d}^2\theta}{\mathrm{d}t^2} = 
    -\omega^2 A\cos(\omega t+\phi) = -\omega^2\theta
$$ 

となり、方程式を満たす。そして、初期値として時刻 $t=0$ で角度 $\theta_0$ まで持ち上げ、静かに放す場合を考える。初期条件は $\theta(0)=\theta_0,\ \dot\theta(0)=0$ である。$\dot\theta(t) = -A\omega\sin(\omega t+\phi)$ なので、

$$\dot\theta(0) = -A\omega\sin\phi = 0 \quad\Rightarrow\quad \phi = 0$$

$$\theta(0) = A\cos 0 = \theta_0 \quad\Rightarrow\quad A = \theta_0$$

となり、

$$\theta(t) = \theta_0\cos\left(\sqrt{\frac{g}{l}}\,t\right)$$

が得られる。

**周期**　$\omega t$ が $2\pi$ 増えるごとに元の状態に戻るので、周期は

$$T_0 = \frac{2\pi}{\omega} = 2\pi\sqrt{\frac{l}{g}}$$

である。周期は振れ幅 $\theta_0$ にもおもりの質量 $m$ にもよらず、糸の長さ $l$ と重力加速度 $g$ だけで決まる（振り子の等時性）。

**$x,\ y$ で見ると**　$\theta$ が小さいとき、$x = l\sin\theta \approx l\theta$、$y = -l\cos\theta \approx -l\left(1-\dfrac{\theta^2}{2}\right) \approx -l$ なので、

$$x(t) \approx l\theta_0\cos\omega t,\qquad y(t) \approx -l$$

となる。水平方向には単振動し、鉛直方向はほとんど動かない（$y$ の変化は $\theta^2$ に比例する高次の小さな量）。これが、先ほど示した $x$ 方向と $y$ 方向の運動方程式の近似解である。

また、張力は $F_T = mg\cos\theta + ml\dot\theta^2 \approx mg$ となり、微小振動では張力は重力とほぼつり合う。

### ばねの運動 → 振り子の運動に関係する運動

ばね定数 $k$ のばねにつけた質量 $m$ の物体について、自然長からの変位を $x$ とすると、復元力 $-kx$（フックの法則）より
$$
m\dd{^2x}{t^2}=-kx
$$
である。これは振り子の微小振動の式と同じ形をしており、解は
$$
x=A\cos(\omega t+\phi),\omega=\sqrt{\frac{k}{m}},F_T=2\pi\sqrt{\frac{m}{k}}
$$
となる（$A$ は振幅、$\phi$ は初期位相）。振り子で $g/l$ が果たしていた役割を、ここでは $k/m$ が果たしている。このように、復元力が変位に比例する運動はすべて単振動になる。

### 水の中の運動・空気中の運動 → 抵抗がある場合の運動（より現実的な運動）

これまでは空気や水の影響を無視していたが、実際には運動を妨げる抵抗力が働く。速度 $v$ が小さいときは、速度に比例する粘性抵抗 $-\gamma v$ で近似できる。鉛直下向きを正として落下運動を考えると、
$$
m\dd{v}{t}=mg-\gamma v
$$
である。$v(0)=0$ として解くと
$$
v(t)=\frac{mg}{\gamma}\left(1-e^{-\gamma t/m}\right)
$$
となり、十分時間がたつと重力と抵抗がつり合って加速度が $0$ になり、一定の速度（終端速度）
$$
v_\infty=\frac{mg}{\gamma}
$$
に近づく。

速度が大きいときは、速度の2乗に比例する慣性抵抗 $-\kappa v^2$ で近似するほうがよく、このときの終端速度は $v_\infty=\sqrt{mg/\kappa}$ となる。

ここまでは一つの質点の話であったが、もし二つの質点がある場合は万有引力も考慮する必要があり複雑になる。そのため、次では似たい問題について説明していくことにする。