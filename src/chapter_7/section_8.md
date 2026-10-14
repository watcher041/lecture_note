
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

このときは反変ベクトルとなるため、以下の通りになる（$w$ は時間を含む特別な変数なので、あえて $x^0$ としている）。

$$
    x'^1=\gamma(x^1-\beta x^0)、
    x'^2=x^2、
    x'^3=x^3、
    x'^0=\gamma(x^0-\beta x^1)
$$
$$
    x^1=\gamma(x'^1+\beta x'^0)、
    x^2=x'^2、
    x^3=x'^3、
    x^0=\gamma(x'^0+\beta x'^1)
$$

一方で、運動方程式についても

$$
    \dd{\bm{p}}{\tau}=
    \bm{f}、
    
    \bm{p}=
    \frac{m_0\bm{v}}
    {\sqrt{1-\frac{\bm{v}^2}{c^2}}}、
    \bm{f}=
    \frac{\bm{F}}{\sqrt{1-\frac{\bm{v}^2}{c^2}}}、
    \mathrm{d}\tau=
    \sqrt{1-\frac{\bm{v}^2}{c^2}}
    \mathrm{d}t
$$
$$
    \dd{E_K}{\tau}=
    (\bm{f}\cdot\bm{v})、
    E_K=
    \frac{m_0c^2}
    {\sqrt{1-\frac{\bm{v}^2}{c^2}}}
$$

と書けたわけだが、ここで速度ベクトルと力は反変ベクトルの形で

$$
    u^0=c、
    u^1=v_x、
    u^2=v_y、
    u^3=v_z
$$
$$
    F^0=\frac{1}{c}(\bm{F}\cdot\bm{v})、
    F^1=F_x、
    F^2=F_y、
    F^3=F_z
$$

というように書けるので、運動量と力は以下の通りにかける。

$$
    p^\mu=
    \frac{m_0u^\mu}
    {\sqrt{1-\frac{\bm{v}^2}{c^2}}}、
    f^\mu=
    \frac{F^\mu}{\sqrt{1-\frac{\bm{v}^2}{c^2}}}、
    (\mu=0,1,2,3)
$$

書くと以下の通りになる。

$$
    \dd{p^\mu}{\tau}=
    f^\mu、
    p^\mu=
    \frac{m_0v^\mu}
    {\sqrt{1-\frac{\bm{v}^2}{c^2}}}
$$

ここで、固有時に関して

$$
    \mathrm{d}\tau=
    \mathrm{d}t'
    \sqrt{1-\frac{\bm{v'}^2}{c^2}}=
    \mathrm{d}t
    \sqrt{1-\frac{\bm{v}^2}{c^2}}
$$

となっていたわけだが、これを少し整理してみると反変ベクトルにより

$$
    (c\mathrm{d}\tau)^2=
    (\mathrm{d}x'^0)^2-
    (\mathrm{d}x'^1)^2-
    (\mathrm{d}x'^2)^2-
    (\mathrm{d}x'^3)^2=
    (\mathrm{d}x^0)^2-
    (\mathrm{d}x^1)^2-
    (\mathrm{d}x^2)^2-
    (\mathrm{d}x^3)^2
$$

というように書けるため、ちょうど微小ベクトルの内積の形で不変な形をしていることから

$$
    (\mathrm{d}\bm{s})^2=(c\mathrm{d}\tau)^2=
    \eta_{\mu\nu}\mathrm{d}x^{\mu}\mathrm{d}x^{\nu}=
    \eta_{\mu\nu}\mathrm{d}x'^{\mu}\mathrm{d}x'^{\nu}
$$

というように定義することができる。ここで、$\eta$ は**Minkofsky計量**と呼ばれるものとなっており、

$$
    \eta_{\mu\nu}=
    \begin{cases}
         1 & (\mu,\nu=1)\\
         -1 & (\mu,\nu=1,2,3)
    \end{cases}
$$

というようになっている。そのため、固有時の方も計量を用いて

$$
    \mathrm{d}\tau=
    \frac{1}{c}
    \sqrt{\eta_{\mu\nu}\mathrm{d}x^{\mu}\mathrm{d}x^{\nu}}=
    \frac{1}{c}
    \sqrt{\eta_{\mu\nu}\mathrm{d}x'^{\mu}\mathrm{d}x'^{\nu}}
$$

というようになる。このことから、固有時を通じてRiemann計量を扱うことができるため、一旦運動方程式を一般化してから置き換えることで加速度系の方程式を得ることができると考えられる。そこで、解析力学において運動方程式はラグランジアン $\mathcal{L}$ と一般化座標 $q$ を用いて
$$
    \dd{}{t}
    \lr{
        \pp{\mathcal{L}}
        { \dot{q}}
    }-
    \lr{
        \pp{\mathcal{L}}
        { q}
    }=0
$$
を利用してみると、力がポテンシャル $U$ で記述されるもの（保存力）としたとき
$$
    \pp{\mathcal{L}}{ v_x}=
    \frac{m_0v_x}
    {\sqrt{1-\frac{\bm{v}^2}{c^2}}}、
    \pp{\mathcal{L}}{ v_y}=
    \frac{m_0v_y}
    {\sqrt{1-\frac{\bm{v}^2}{c^2}}}、
    \pp{\mathcal{L}}{ v_z}=
    \frac{m_0v_z}
    {\sqrt{1-\frac{\bm{v}^2}{c^2}}}
$$
$$
    \pp{\mathcal{L}}{ x}=
    -\lr{
        \pp{ U}{ x}
    }、
     \pp{\mathcal{L}}{ y}=
     -\lr{
        \pp{ U}{ y}
    }、
    \pp{\mathcal{L}}{ z}=
    -\lr{
        \pp{ U}{ z}
    }
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
    { \dot{x}^\lambda}=
    -m_0c
    \pp{}
    { \dot{x}^\lambda}
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
    { x^\lambda}=
    -m_0c
    \pp{}
    { x^\lambda}
    \sqrt{
    g_{\mu\nu}\dot{x}^\mu\dot{x}^\nu}-
    \pp{ U}{ x^\lambda}=
    -\frac{m_0c\dot{s}}{2}
    \lr{
        \pp{ g_{\mu\nu}}
        { x^\lambda}
        \dd{x^{\mu}}
        {s}
        \dd{x^{\nu}}
        {s}
    }-
    \pp{ U}{ x^\lambda}
$$
となる（ここで $g_{\mu\nu}=g_{\nu\mu}$ を利用している）。
以上の結果を上記の運動方程式に代入すると以下のような形になる。
$$
    m_0c\dot{s}
    \left[
    \dd{ g_{\lambda\mu}}
    { s}
    \dd{x^{\mu}}
    {s}+
    g_{\lambda\mu}
    \dd{^2x^{\mu}}
    {s^2}-
    \frac{1}{2}
    \lr{
        \pp{ g_{\mu\nu}}
        { x^\lambda}
        \dd{x^{\mu}}
        {s}
        \dd{x^{\nu}}
        {s}
    }\right]-
    \pp{ U}{ x^\lambda}=0
$$
ここで、計量に関しての微分が
$$
    \dd{ g_{\lambda\mu}}
    { s}=
    \pp{ g_{\lambda\mu}}
    { x^\nu}
    \dd{ x^\nu}
    { s}
$$
であるため、これを踏まえて整理すると次の通りになる。
$$
    m_0c\dot{s}
    \left[
    g_{\lambda\mu}
    \dd{^2x^{\mu}}
    {s^2}+
    \lr{
        \pp{ g_{\lambda\mu}}
        { x^\nu}-
        \frac{1}{2}
        \pp{ g_{\mu\nu}}
        { x^\lambda}
    }
    \dd{x^{\mu}}{s}
    \dd{x^{\nu}}{s}
    \right]-
    \pp{ U}{ x^\lambda}=0
$$
仮に外部からの影響がなく（ $U=0$ ）、 $\dot{s}\neq 0$ であることを踏まえると、
$$
    g_{\lambda\mu}
    \dd{^2x^{\mu}}
    {s^2}+
    \lr{
        \pp{ g_{\lambda\mu}}
        { x^\nu}-
        \frac{1}{2}
        \pp{ g_{\mu\nu}}
        { x^\lambda}
    }
    \dd{x^{\mu}}{s}
    \dd{x^{\nu}}{s}=0
$$
となるわけだが、ここで以下のように変形する。
$$
    \lr{
        \pp{ g_{\lambda\mu}}
        { x^\nu}-
        \frac{1}{2}
        \pp{ g_{\mu\nu}}
        { x^\lambda}
    }
    \dd{x^{\mu}}{s}
    \dd{x^{\nu}}{s}=
    \frac{1}{2}
    \lr{
        \pp{ g_{\lambda\mu}}
        { x^\nu}+
        \pp{ g_{\lambda\nu}}
        { x^\mu}-
        \pp{ g_{\mu\nu}}
        { x^\lambda}
    }
    \dd{x^{\mu}}{s}
    \dd{x^{\nu}}{s}
$$
そして、計量の微分を展開してみると
$$
    \pp{ g_{\lambda\mu}}
    { x^\nu}=
    \pp{}{ x^\nu}
    (\bm{e}_\lambda\cdot\bm{e}_\mu)=
    \pp{\bm{e}_\lambda}
    { x^\nu}\cdot\bm{e}_\mu+
    \bm{e}_\lambda\cdot
    \pp{\bm{e}_\mu}
    { x^\nu}
$$
であり、ここで**第１種クリストフェル記号**を
$$
    \Gamma_{\nu\lambda,\mu}=
    \pp{\bm{e}_\lambda}
    { x^\nu}\cdot\bm{e}_\mu=
    \bm{e}_\mu\cdot
    \pp{\bm{e}_\lambda}
    { x^\nu}
$$
というように定義することで、
$$
    \pp{ g_{\lambda\mu}}
    { x^\nu}=
    \Gamma_{\nu\lambda,\mu}+
    \Gamma_{\nu\mu,\lambda}
$$
となる。同様に、その他の偏微分についても
$$
    \pp{ g_{\lambda\nu}}
    { x^\mu}=
    \Gamma_{\mu\lambda,\nu}+
    \Gamma_{\mu\nu,\lambda}、
    \pp{ g_{\mu\nu}}
    { x^\lambda}=
    \Gamma_{\lambda\mu,\nu}+
    \Gamma_{\lambda\nu,\mu}
$$
となるため、以下のような関係が成り立つことが分かる。
$$
    \Gamma_{\mu\nu,\lambda}=
    \frac{1}{2}
    \lr{
        \pp{ g_{\lambda\mu}}
        { x^\nu}+
        \pp{ g_{\lambda\nu}}
        { x^\mu}-
        \pp{ g_{\mu\nu}}
        { x^\lambda}
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
        \pp{ g_{\lambda\mu}}
        { x^\nu}+
        \pp{ g_{\lambda\nu}}
        { x^\mu}-
        \pp{ g_{\mu\nu}}
        { x^\lambda}
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