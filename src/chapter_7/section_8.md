
## 特殊相対性理論から一般相対性理論へ

 　特殊相対性理論では、座標系の変換としてLorentz変換が利用されていた。

$$
    x'=\gamma(x-\beta w)、
    y'=y、
    z'=z、
    w'=\gamma(w-\beta x)、
$$
$$
    x=\gamma(x'+\beta w')、
    y=y'、
    z=z'、
    w=\gamma(w'+\beta x')、
$$
$$
    w=ct、
    w'=ct'、
    \beta=\frac{V}{c}、
    \gamma=\frac{1}{\sqrt{1-\beta^2}}
$$

この変換の間では、ある位置ベクトル $\bm{s}$ の微小変化に対して

$$
    \mathrm{d}\bm{s}=
    \mathrm{d}x^{\mu}\bm{b}_\mu=
    \mathrm{d}x'^{\mu}\bm{b}'_\mu、
    (\mathrm{d}\bm{s})^2=
    g_{\mu\nu}
    \mathrm{d}x^{\mu}\mathrm{d}x^{\nu}=
    g_{\mu\nu}'
    \mathrm{d}x'^{\mu}\mathrm{d}x'^{\nu}
$$
$$
    \mathrm{d}x'^\mu=
    \lr{
        \pp{x'^\mu}{x^\nu}
    }
    \mathrm{d}x^\nu、
    \mathrm{d}x^\nu=
    \lr{
        \pp{x^\nu}{x'^\mu}
    }
    \mathrm{d}x'^\mu、
    \bm{b}'_\mu=
    \lr{
        \pp{x^\nu}{x'^\mu}
    }
    \bm{b}_\nu、
    \bm{b}_\nu=
    \lr{
        \pp{x'^\mu}{x^\nu}
    }
    \bm{b}'_\mu
$$
$$
    g_{\mu\nu} = \bm{b}_\mu\cdot\bm{b}_\nu、
    g'_{\mu\nu} = \bm{b}'_\mu\cdot\bm{b}'_\nu
$$


が成り立つ。ただし、ここで $w$ が時間を含む特殊な変数であることを考慮して以下の通りにしている。

$$
    \mathrm{d}x^0=\mathrm{d}w、
    \mathrm{d}x^1=\mathrm{d}x、
    \mathrm{d}x^2=\mathrm{d}y、
    \mathrm{d}x^3=\mathrm{d}z
$$
$$
    \mathrm{d}x'^0=\mathrm{d}w'、
    \mathrm{d}x'^1=\mathrm{d}x'、
    \mathrm{d}x'^2=\mathrm{d}y'、
    \mathrm{d}x'^3=\mathrm{d}z'
$$

また $g_{\mu\nu}$ の成分は、基底ベクトルの内積をどう定めるかで決まり、座標変換で基底が変換されると一般には変化する。一方で、相対論的力学で出てきた固有時の微小変化

$$
    \mathrm{d}\tau = \mathrm{d}t'\sqrt{1-\frac{\bm{v}'^2}{c^2}} = \mathrm{d}t\sqrt{1-\frac{\bm{v}^2}{c^2}}
$$
$$
    \bm{v}'^2=
    \lr{\dd{x'^1}{t'}}^2+
    \lr{\dd{x'^2}{t'}}^2+
    \lr{\dd{x'^3}{t'}}^2、
    \bm{v}^2=
    \lr{\dd{x^1}{t}}^2+
    \lr{\dd{x^2}{t}}^2+
    \lr{\dd{x^3}{t}}^2
$$

は座標系によらない量であったため、$\mathrm{d}x^0 = c\,\mathrm{d}t、\mathrm{d}x'^0 = c\mathrm{d}t'$ を用いて

$$
    (c\,\mathrm{d}\tau)^2 = (\mathrm{d}x'^0)^2 - (\mathrm{d}x'^1)^2 - (\mathrm{d}x'^2)^2 - (\mathrm{d}x'^3)^2 = (\mathrm{d}x^0)^2 - (\mathrm{d}x^1)^2 - (\mathrm{d}x^2)^2 - (\mathrm{d}x^3)^2
$$

と書ける。そこで $(\mathrm{d}s)^2 = (c\,\mathrm{d}\tau)^2$ と定めると、

$$
    (\mathrm{d}s)^2=
    g_{\mu\nu}\mathrm{d}x^\mu\mathrm{d}x^\nu=
    (\mathrm{d}x^0)^2 - (\mathrm{d}x^1)^2 - (\mathrm{d}x^2)^2 - (\mathrm{d}x^3)^2
$$

として係数を比べることで

$$
    g_{\mu\nu} = g'_{\mu\nu} = \eta_{\mu\nu} = \begin{pmatrix} 1 & 0 & 0 & 0 \\ 0 & -1 & 0 & 0 \\ 0 & 0 & -1 & 0 \\ 0 & 0 & 0 & -1 \end{pmatrix}
$$

が得られる。この $\eta_{\mu\nu}$ を**Minkowski計量**と呼び、$(\mathrm{d}s)^2 $ も以下のように同じ形になる。

$$
    (\mathrm{d}s)^2 = \eta_{\mu\nu}\mathrm{d}x^\mu\mathrm{d}x^\nu = \eta_{\mu\nu}\mathrm{d}x'^\mu\mathrm{d}x'^\nu
$$

また、$\mathrm{d}x^\mu$ が反変ベクトルであることから固有時で割った

$$
    u^0=
    \dd{x^0}{\tau}、
    u^1=
    \dd{x^1}{\tau}、
    u^2=
    \dd{x^2}{\tau}、
    u^3=
    \dd{x^3}{\tau}
    \rightarrow
    u^\mu=
    \dd{x^\mu}{\tau}
$$

という量 $u^\mu$（**4元速度**）も反変ベクトルになる。そのため、運動量も反変ベクトルの形で

$$
    p^0=
    m_0u^0、
    p^1=
    m_0u^1、
    p^2=
    m_0u^2、
    p^3=
    m_0u^3
    \rightarrow
    p^\mu=
    m_0u^\mu
$$

といように 4元運動量 $p^\mu$ で表記することができ、力に関しても運動方程式から

$$
    f^0=
    \dd{p^0}{\tau}、
    f^1=
    \dd{p^1}{\tau}、
    f^2=
    \dd{p^2}{\tau}、
    f^3=
    \dd{p^3}{\tau}
    \rightarrow
    f^\mu=
    \dd{p^\mu}{\tau}
$$

というように **4元力** $f^\mu$ で表記される。分かりやすいように $(w,x,y,z)$ の表記にしてみると、まず4元速度は

$$
    u^0 = \frac{c}{\sqrt{1-\frac{\bm{v}^2}{c^2}}}、
    u^1 = \frac{v_x}{\sqrt{1-\frac{\bm{v}^2}{c^2}}}、
    u^2 = \frac{v_y}{\sqrt{1-\frac{\bm{v}^2}{c^2}}}、
    u^3 = \frac{v_z}{\sqrt{1-\frac{\bm{v}^2}{c^2}}}
$$

となる。したがって 4元運動量は

$$
    p^0 = \frac{E_r}{c}、
    p^1 = p_x、
    p^2 = p_y、
    p^3 = p_z、
    E_r=\frac{m_0c^2}{\sqrt{1-\frac{\bm{v}^2}{c^2}}}
$$

と、時間成分がエネルギーを $c$ で割ったもの、空間成分がこれまでの相対論的運動量になる。また、4元力に関しても相対論力学の運動方程式

$$
    \dd{\bm{p}}{\tau}=
    \bm{f}、
     \dd{E_r}{\tau}=
    (\bm{f}\cdot\bm{v})、
    \bm{p}=
    \frac{m_0\bm{v}}
    {\sqrt{1-\frac{\bm{v}^2}{c^2}}}、
    E_r=
    \frac{m_0c^2}
    {\sqrt{1-\frac{\bm{v}^2}{c^2}}}
$$

と比べてみることで、以下のように対応していることが分かる。

$$
    f^0 = \frac{1}{c}(\bm{f}\cdot\bm{v})、
    f^1 = f_x、
    f^2 = f_y、
    f^3 = f_z
$$

ここまでのことから、最終的に運動方程式は反変ベクトルの形で

$$
    f^\mu=
    \dd{p^\mu}{\tau}、
    p^\mu=
    m_0u^\mu、
    u^\mu=
    \dd{x^\mu}{\tau}
$$

と表記されることになるが、この形はあくまでLorentz変換の範囲のもので一般的な加速度系では成り立たない。そこで、座標のとり方によらない形で運動方程式を扱うため、一度解析力学の形に変更してみる。通常の力学の仮想変位は、時刻を止めたまま位置だけをずらす変位で、$\delta t=0$ である。ここでは時刻も世界線の一部なので、$\tau$ を止めたまま世界線全体を $x^\mu\to x^\mu+\delta x^\mu$ とずらす。このとき $\delta x^0=c\,\delta t\neq0$ も許される（時間が変化することに注意）。運動方程式は4元ベクトルの式なので、任意の $\delta x^\mu$ に対して

$$
    \lr{f^\mu-\dd{p^\mu}{\tau}}\delta x_\mu=0、
    \delta x_\mu=\eta_{\mu\nu}\delta x^\nu
$$

が成り立つ。各内積の形を展開すると

$$
    f^\mu\delta x_\mu=
    f^0\delta x^0-
    (f^1\delta x^1+f^2\delta x^2+f^3\delta x^3)=
    \bm{f}\cdot(\bm{v}\delta t - \delta\bm{r})
$$
$$
    \dd{p^\mu}{\tau}
    \delta x_\mu=
    \dd{p^0}{\tau}\delta x^0-
    \lr{
        \dd{p^1}{\tau}\delta x^1+
        \dd{p^2}{\tau}\delta x^2+
        \dd{p^3}{\tau}\delta x^3
    }=
    \lr{
        \dd{E_r}{\tau}\delta t-
        \dd{\bm{p}}{\tau}\cdot\delta\bm{r}
    }
$$

となり、$\delta t=0$ なら3次元の仮想仕事に一致する。それを踏まえ、まず $x_\mu$ を一般化座標 $q$ で表すと

$$
    \delta x_\mu=
    \pp{x_\mu}{q^i}\delta q^i
$$

というようになるため、$q$ で置き換えると以下の通りとなる。

$$
    \lr{
        f^\mu\pp{x_\mu}{q^i}-
        \dd{p^\mu}{\tau}
        \pp{x_\mu}{q^i}
    }\delta q^i=0
$$

次に、運動量 $p^\mu$ が $m_0u^\mu$ であることから

$$
    \dd{p^\mu}{\tau}
    \pp{x_\mu}{q^i}=
    \dd{}{\tau}
    \lr{
        m_0u^\mu\pp{x_\mu}{q^i}
    }-
    m_0u^\mu\dd{}{\tau}\lr{\pp{x_\mu}{q^i}}
$$

となるが、ここで $u_\mu$ も一般化座標 $q$ により以下の形でおく。

$$
    u_\mu=
    \dd{x_\mu}{\tau}=\pp{x_\mu}{q^j}\dot{q}^j、
    \dot{q}^j=\dd{q^j}{\tau}
$$

そして、次の2つの恒等式

$$
    \text{(a)}\quad
    \pp{u_\mu}{\dot q^i}=\pp{x_\mu}{q^i},\qquad
    \text{(b)}\quad
    \dd{}{\tau}\lr{\pp{x_\mu}{q^i}}=\pp{u_\mu}{q^i}
$$

が成り立つことを利用して、試しに

$$
    T=\frac{1}{2}m_0u_\nu u^\nu
$$

とおくと、(a), (b) から

$$
    m_0u^\mu\pp{x_\mu}{q^i}=
    m_0u_\mu\pp{u^\mu}{\dot q^i}=
    \pp{T}{\dot q^i}、
    m_0u^\mu\dd{}{\tau}\lr{\pp{x_\mu}{q^i}}=
    m_0u_\mu\pp{u^\mu}{q^i}=\pp{T}{q^i}
$$

となる。これらを代入して $\delta q^i$ の係数を0とおくと（$\delta q^i$ は互いに独立）、

$$
    \dd{}{\tau}
    \lr{\pp{T}{\dot{q}^i}}-\pp{T}{q^i}=Q_i、
    Q_i\equiv f^\mu\pp{x_\mu}{q^i}
$$

が得られる。$Q_i$ は一般化力である。次に、力が $U(x^\mu)$（$x^0=ct$ を含む）から来る場合を考える。$\bm{F}=-\nabla U$ のとき、

$$
    f^\mu=
    \gamma\lr{
        -\frac{\bm{v}\cdot\nabla U}{c},\ -\nabla U
    }
$$

であり、これを代入すると

$$ 
    Q_i=
    \gamma\LR{

    }
$$

$$
Q_i=\frac{u^0}{c}\pp{U}{x^\mu}\pp{x^\mu}{q^i}-\frac1c\dd{U}{\tau}\pp{x^0}{q^i}
$$

と書ける。ここで

$$
W=\frac Uc\,u^0
$$

を考えると、(a), (b) を使って

$$
\pp{W}{q^i}-\dd{}{\tau}\lr{\pp{W}{\dot q^i}}
=\frac{u^0}{c}\pp{U}{q^i}-\frac1c\dd{U}{\tau}\pp{x^0}{q^i}
$$

となり、右辺は $Q_i$ に一致する。すなわち

$$
Q_i=\pp{W}{q^i}-\dd{}{\tau}\lr{\pp{W}{\dot q^i}}
$$

である。これを左辺に移すと

$$
    \dd{}{\tau}
    \lr{\pp{(T+W)}{\dot q^i}}-
    \pp{(T+W)}{q^i}=0
$$

となる。したがって、ラグランジアンは

$$
    \mathcal{L}=
    T+W=
    \frac{1}{2}m_0u_\nu u^\nu+\frac Uc\,u^0
$$

であり、運動方程式は一般化座標のとり方によらない形

$$
    \dd{}{\tau}
    \lr{
        \pp{\mathcal{L}}{\dot{q}^i}
    }-\pp{\mathcal{L}}{q^i}=0、
    \dot{q}_i=
    \dd{q_i}{\tau}
$$

で書ける。拘束 $u_\nu u^\nu=c^2$ は、$\partial/\partial\dot q^i$ を取ったあとで課す。

**各成分の確認**

$q^\mu=x^\mu$ とおくと、$\frac{x^\mu}{q^i}=\delta^\mu_i$ で、

$$
    \frac{\mathcal{L}}{u^\mu}=
    p_\mu+\frac Uc\,\delta^0_\mu,\qquad
    \frac{\mathcal{L}}{x^\mu}=
    \frac{u^0}{c}\pp{U}{x^\mu}
$$

となる。これを運動方程式に入れると

$$
\dd{p_\mu}{\tau}=\frac{u^0}{c}\pp{U}{x^\mu}-\frac1c\dd{U}{\tau}\,\delta^0_\mu
$$

である。

- 空間成分：$\frac{p^i}{\tau}=-\gamma\frac{U}{x^i}=f^i$
- 第0成分：$\frac{p^0}{\tau}=\frac{\gamma}{c}\frac{U}{t}-\frac{\gamma}{c}\lr{\frac{U}{t}+\bm v\cdot\nabla U}=-\frac{\gamma}{c}\,\bm v\cdot\nabla U=f^0$

となり、4成分すべてが $\frac{p^\mu}{\tau}=f^\mu$ と一致する。第0成分は、$p^0=E/c$ なので仕事とエネルギーの関係 $\frac{E}{t}=\bm F\cdot\bm v$ を表している。

上記は固有時で書いたものであるため、これを $t$ で書きなおすと以下の通りになる。

$$
    \dd{}{t}
    \lr{
        \pp{\mathcal{L}}{q'^i}
    }-\pp{\mathcal{L}}{q^i}=0、
    q'_i=\dd{q_i}{t}
$$











































であるから、ラグランジアンが以下の通りになることが分かる（静止エネルギーがポテンシャルエネルギーの一部のような振る舞いをする）。

$$
    \mathcal{L}=
    -m_0c^2\sqrt{1-\frac{\bm{v}^2}{c^2}}-U
    \simeq
    \frac{1}{2}m\bm{v}^2-(m_0c^2+U)
$$

次に、前回でも登場した計量 $g_{\mu\nu}$ により

$$
    \sqrt{1-\frac{\bm{v}^2}{c^2}}=
    \frac{1}{c}
    \lr{
    \dd{s}{t}
    }、
    \dd{s}{t}=
    \sqrt{
    \eta_{\mu\nu}
    \dd{x^\mu}{t}
    \dd{x^\nu}{t}}
    \rightarrow
    \sqrt{g_{\mu\nu}\dot{x}^\mu\dot{x}^\nu}
$$

と置き換えて、改めて運動方程式を記述すると $\dot{s}=\sqrt{g_{\mu\nu}\dot{x}^\mu\dot{x}^\nu}、q=x^\lambda$ として

$$
    \pp{\mathcal{L}}
    {\dot{x}^\lambda}=
    -m_0c
    \pp{}
    {\dot{x}^\lambda}
    \sqrt{
    g_{\mu\nu}\dot{x}^\mu\dot{x}^\nu}=
    -\frac{m_0c}{2\dot{s}}
    (g_{\lambda\mu}\dot{x}^{\nu}+
    g_{\lambda\mu}\dot{x}^{\mu})=
    -m_0c
    \lr{
    g_{\lambda\mu}
    \dd{x^{\mu}}
    {s}
    }
$$
$$
    \pp{\mathcal{L}}
    {x^\lambda}=
    -m_0c
    \pp{}
    {x^\lambda}
    \sqrt{
    g_{\mu\nu}\dot{x}^\mu\dot{x}^\nu}-
    \pp{U}{x^\lambda}=
    -\frac{m_0c\dot{s}}{2}
    \lr{
        \pp{g_{\mu\nu}}
        {x^\lambda}
        \dd{x^{\mu}}
        {s}
        \dd{x^{\nu}}
        {s}
    }-
    \pp{U}{x^\lambda}
$$

となる（ここで $g_{\mu\nu}=g_{\nu\mu}$ を利用している）。
以上の結果を上記の運動方程式に代入すると以下のような形になる。

$$
    m_0c\dot{s}
    \LR{
    \dd{g_{\lambda\mu}}
    {s}
    \dd{x^{\mu}}
    {s}+
    g_{\lambda\mu}
    \dd{^2x^{\mu}}
    {s^2}-
    \frac{1}{2}
    \lr{
        \pp{g_{\mu\nu}}
        {x^\lambda}
        \dd{x^{\mu}}
        {s}
        \dd{x^{\nu}}
        {s}
    }}-
    \pp{U}{x^\lambda}=0
$$

ここで、計量に関しての微分が

$$
    \dd{g_{\lambda\mu}}
    {s}=
    \pp{g_{\lambda\mu}}
    {x^\nu}
    \dd{x^\nu}
    {s}
$$

であるため、これを踏まえて整理すると次の通りになる。

$$
    m_0c\dot{s}
    \LR{
    g_{\lambda\mu}
    \dd{^2x^{\mu}}
    {s^2}+
    \lr{
        \pp{g_{\lambda\mu}}
        {x^\nu}-
        \frac{1}{2}
        \pp{g_{\mu\nu}}
        {x^\lambda}
    }
    \dd{x^{\mu}}{s}
    \dd{x^{\nu}}{s}
    }-
    \pp{U}{x^\lambda}=0
$$

仮に外部からの影響がなく（ $U=0$ ）、 $\dot{s}\neq 0$ であることを踏まえると、

$$
    g_{\lambda\mu}
    \dd{^2x^{\mu}}
    {s^2}+
    \lr{
        \pp{g_{\lambda\mu}}
        {x^\nu}-
        \frac{1}{2}
        \pp{g_{\mu\nu}}
        {x^\lambda}
    }
    \dd{x^{\mu}}{s}
    \dd{x^{\nu}}{s}=0
$$

となるわけだが、ここで以下のように変形する。

$$
    \lr{
        \pp{g_{\lambda\mu}}
        {x^\nu}-
        \frac{1}{2}
        \pp{g_{\mu\nu}}
        {x^\lambda}
    }
    \dd{x^{\mu}}{s}
    \dd{x^{\nu}}{s}=
    \frac{1}{2}
    \lr{
        \pp{g_{\lambda\mu}}
        {x^\nu}+
        \pp{g_{\lambda\nu}}
        {x^\mu}-
        \pp{g_{\mu\nu}}
        {x^\lambda}
    }
    \dd{x^{\mu}}{s}
    \dd{x^{\nu}}{s}
$$

そして、計量の微分を展開してみると

$$
    \pp{g_{\lambda\mu}}
    {x^\nu}=
    \pp{}{x^\nu}
    (\bm{b}_\lambda\cdot\bm{b}_\mu)=
    \pp{\bm{b}_\lambda}
    {x^\nu}\cdot\bm{b}_\mu+
    \bm{b}_\lambda\cdot
    \pp{\bm{b}_\mu}
    {x^\nu}
$$

であり、ここで**第１種クリストフェル記号**を

$$
    \Gamma_{\nu\lambda,\mu}=
    \pp{\bm{b}_\lambda}
    {x^\nu}\cdot\bm{b}_\mu=
    \bm{b}_\mu\cdot
    \pp{\bm{b}_\lambda}
    {x^\nu}
$$

というように定義することで、

$$
    \pp{g_{\lambda\mu}}
    {x^\nu}=
    \Gamma_{\nu\lambda,\mu}+
    \Gamma_{\nu\mu,\lambda}
$$

となる。同様に、その他の偏微分についても

$$
    \pp{g_{\lambda\nu}}
    {x^\mu}=
    \Gamma_{\mu\lambda,\nu}+
    \Gamma_{\mu\nu,\lambda}、
    \pp{g_{\mu\nu}}
    {x^\lambda}=
    \Gamma_{\lambda\mu,\nu}+
    \Gamma_{\lambda\nu,\mu}
$$

となるため、以下のような関係が成り立つことが分かる。

$$
    \Gamma_{\mu\nu,\lambda}=
    \frac{1}{2}
    \lr{
        \pp{g_{\lambda\mu}}
        {x^\nu}+
        \pp{g_{\lambda\nu}}
        {x^\mu}-
        \pp{g_{\mu\nu}}
        {x^\lambda}
    }
$$

そして、元の式に $g^{k\lambda}$ をかけることにより以下の形が得られる。

$$
    \dd{^2x^k}
    {s^2}+
    g^{k\lambda}
    \Gamma_{\mu\nu,\lambda}
    \dd{x^{\mu}}{s}
    \dd{x^{\nu}}{s}=0
$$

これは**第２種クリストッフェル記号**を用いて

$$
    \Gamma^{k}_{\mu\nu}=
    g^{k\lambda}
    \Gamma_{\mu\nu,\lambda}=
    \frac{1}{2}g^{k\lambda}
    \lr{
        \pp{g_{\lambda\mu}}
        {x^\nu}+
        \pp{g_{\lambda\nu}}
        {x^\mu}-
        \pp{g_{\mu\nu}}
        {x^\lambda}
    }
$$

により、次の**測地線方程式**の形で記載される。

$$
    \dd{^2x^k}
    {s^2}+
    \Gamma^{k}_{\mu\nu}
    \dd{x^{\mu}}{s}
    \dd{x^{\nu}}{s}=0
$$

この式は物体がRiemann空間内を最短距離で通るということを前提にして求められるもので、例として点Aから点Bへ物体が移動するものとすると

$$
    s=\int_A^B\mathrm{d}s=
    \int_A^B
    \dd{s}{t}
    \mathrm{d}t=
    \int_A^B
    \sqrt{g_{\mu\nu}\dot{x}^\mu\dot{x}^\nu}
    \mathrm{d}t
$$

が最小となる（$\delta s=0$）ときの関係式からも確認できる。特殊相対性理論においては、$g_{\mu\nu}=\eta_{\mu\nu}$（Lorentz変換）とするとクリストッフェル記号は0となり

$$
    \dd{^2x^k}
    {s^2}=0、
    \dd{s}{t}=
    \sqrt{
        \eta_{\mu\nu}
        \dot{x}^{\mu} \dot{x}^{\nu}
    }=
    \sqrt{c^2-\bm{v}^2}
$$

となるが、ここで $s$ の時間微分に関して**固有時** $\tau$ を

$$
    \mathrm{d}\tau=
    \frac{\dot{s}}{c}\mathrm{d}t=
    \dd{s}{c}=
    \sqrt{1-\frac{\bm{v}^2}{c^2}}
    \mathrm{d}t
$$

とおくと、先程測地線方程式に $m_0c\dot{s}$ がかかっていたことを踏まえて

$$
    m_0c\dot{s}
    \dd{^2x^k}{s^2}=0
    \rightarrow
    \dd{p^k}{\tau}=0、
    \lr{
        p^k=
        m_0
        \dd{x^k}
        {\tau}
    }
$$

というように、相対論的力学で登場した運動方程式で力を0とした式が求められることが分かる。ここでの  $p^k$ は4元運動量呼ばれており、右辺に力がある場合には $f^k$ （4元力）となる。このように、今までは速度に応じて質量が変化するものと思われてきたが、実は時間の進み方が変化していたことが分かる。


測地線方程式において、第二項目を右辺に移項し両辺に $m_0c$ をかけると $p^k=m_0cv^k$ であるため

$$
    \dd{p^k}
    {\tau}=
    -\frac{1}{m_0c}\Gamma^{k}_{\mu\nu}
    p^{\mu}p^{\nu}
$$

となるが、ここで右辺が慣性力によるものになると思われる。そこで、まずは簡単に地球上の重力を考慮して

$$
    \dd{p^3}
    {t}=
    -\frac{Gm_0M_0}{(x^3+R_0)^2}
$$