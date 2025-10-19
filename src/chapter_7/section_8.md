
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
    \frac{\mathrm{d}\bm{p}}{\mathrm{d}\tau}=
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

という形で書けたわけなので、これも反変ベクトルの形で書くと以下の通りになる。

$$
    \frac{\mathrm{d}p^\mu}{\mathrm{d}\tau}=
    f^\mu、
    p^\mu=
    \frac{m_0v^\mu}
    {\sqrt{1-\frac{\bm{v}^2}{c^2}}}、
    f^\mu=
    \frac{F^\mu}{\sqrt{1-\frac{\bm{v}^2}{c^2}}}、
    (\mu=0,1,2,3)
$$

これが成り立つことは $p^1、p^2、p^3$ については確認できているが、$p^0$ については

$$
    p^0=
    \frac{m_0v^0}
    {\sqrt{1-\frac{\bm{v}^2}{c^2}}}=
    \frac{m_0c}
    {\sqrt{1-\frac{\bm{v}^2}{c^2}}}、
    p'^0=
    \frac{m_0v'^0}
    {\sqrt{1-\frac{\bm{v}'^2}{c^2}}}=
    \frac{m_0c}
    {\sqrt{1-\frac{\bm{v}'^2}{c^2}}}
$$

というようになることと、固有時 $\mathrm{d}\tau$ について

$$
    
$$

これを解析力学へ応用してみることにする。まず、解析力学において運動方程式はラグランジアン $\mathcal{L}$ と一般化座標 $q$ を用いて以下のようになっていた。
$$
    \frac{\mathrm{d}}{\mathrm{d}t}
    \left(
        \frac{\partial\mathcal{L}}
        {\partial \dot{q}}
    \right)-
    \left(
        \frac{\partial\mathcal{L}}
        {\partial q}
    \right)=0
$$
これと先ほどの運動方程式を比較すると、力がポテンシャル $U$ で記述されるもの（保存力）としたとき
$$
    \frac{\partial\mathcal{L}}{\partial v_x}=
    \frac{m_0v_x}
    {\sqrt{1-\frac{\bm{v}^2}{c^2}}}、
    \frac{\partial\mathcal{L}}{\partial v_y}=
    \frac{m_0v_y}
    {\sqrt{1-\frac{\bm{v}^2}{c^2}}}、
    \frac{\partial\mathcal{L}}{\partial v_z}=
    \frac{m_0v_z}
    {\sqrt{1-\frac{\bm{v}^2}{c^2}}}
$$
$$
    \frac{\partial\mathcal{L}}{\partial x}=
    -\left(
        \frac{\partial U}{\partial x}
    \right)、
     \frac{\partial\mathcal{L}}{\partial y}=
     -\left(
        \frac{\partial U}{\partial y}
    \right)、
    \frac{\partial\mathcal{L}}{\partial z}=
    -\left(
        \frac{\partial U}{\partial z}
    \right)
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
    \left(
    \frac{\mathrm{d}s}{\mathrm{d}t}
    \right)、
    \frac{\mathrm{d}s}{\mathrm{d}t}=
    \sqrt{
    \eta_{\mu\nu}
    \frac{\mathrm{d}x^\mu}{\mathrm{d}t}
    \frac{\mathrm{d}x^\nu}{\mathrm{d}t}}
    \rightarrow
    \sqrt{g_{\mu\nu}\dot{x}^\mu\dot{x}^\nu}
$$
と置き換えて、改めて運動方程式を記述すると $\dot{s}=\sqrt{g_{\mu\nu}\dot{x}^\mu\dot{x}^\nu}、q=x^\lambda$ として
$$
    \frac{\partial\mathcal{L}}
    {\partial \dot{x}^\lambda}=
    -m_0c
    \frac{\partial}
    {\partial \dot{x}^\lambda}
    \sqrt{
    g_{\mu\nu}\dot{x}^\mu\dot{x}^\nu}=
    -\frac{m_0c}{2\dot{s}}
    (g_{\lambda\mu}\dot{x}^{\nu}+
    g_{\lambda\mu}\dot{x}^{\mu})=
    -m_0c
    \left(
    g_{\lambda\mu}
    \frac{\mathrm{d}x^{\mu}}
    {\mathrm{d}s}
    \right)
$$
$$
    \frac{\partial\mathcal{L}}
    {\partial x^\lambda}=
    -m_0c
    \frac{\partial}
    {\partial x^\lambda}
    \sqrt{
    g_{\mu\nu}\dot{x}^\mu\dot{x}^\nu}-
    \frac{\partial U}{\partial x^\lambda}=
    -\frac{m_0c\dot{s}}{2}
    \left(
        \frac{\partial g_{\mu\nu}}
        {\partial x^\lambda}
        \frac{\mathrm{d}x^{\mu}}
        {\mathrm{d}s}
        \frac{\mathrm{d}x^{\nu}}
        {\mathrm{d}s}
    \right)-
    \frac{\partial U}{\partial x^\lambda}
$$
となる（ここで $g_{\mu\nu}=g_{\nu\mu}$ を利用している）。
以上の結果を上記の運動方程式に代入すると以下のような形になる。
$$
    m_0c\dot{s}
    \left[
    \frac{\mathrm{d} g_{\lambda\mu}}
    {\mathrm{d} s}
    \frac{\mathrm{d}x^{\mu}}
    {\mathrm{d}s}+
    g_{\lambda\mu}
    \frac{\mathrm{d}^2x^{\mu}}
    {\mathrm{d}s^2}-
    \frac{1}{2}
    \left(
        \frac{\partial g_{\mu\nu}}
        {\partial x^\lambda}
        \frac{\mathrm{d}x^{\mu}}
        {\mathrm{d}s}
        \frac{\mathrm{d}x^{\nu}}
        {\mathrm{d}s}
    \right)\right]-
    \frac{\partial U}{\partial x^\lambda}=0
$$
ここで、計量に関しての微分が
$$
    \frac{\mathrm{d} g_{\lambda\mu}}
    {\mathrm{d} s}=
    \frac{\partial g_{\lambda\mu}}
    {\partial x^\nu}
    \frac{\mathrm{d} x^\nu}
    {\mathrm{d} s}
$$
であるため、これを踏まえて整理すると次の通りになる。
$$
    m_0c\dot{s}
    \left[
    g_{\lambda\mu}
    \frac{\mathrm{d}^2x^{\mu}}
    {\mathrm{d}s^2}+
    \left(
        \frac{\partial g_{\lambda\mu}}
        {\partial x^\nu}-
        \frac{1}{2}
        \frac{\partial g_{\mu\nu}}
        {\partial x^\lambda}
    \right)
    \frac{\mathrm{d}x^{\mu}}{\mathrm{d}s}
    \frac{\mathrm{d}x^{\nu}}{\mathrm{d}s}
    \right]-
    \frac{\partial U}{\partial x^\lambda}=0
$$
仮に外部からの影響がなく（ $U=0$ ）、 $\dot{s}\neq 0$ であることを踏まえると、
$$
    g_{\lambda\mu}
    \frac{\mathrm{d}^2x^{\mu}}
    {\mathrm{d}s^2}+
    \left(
        \frac{\partial g_{\lambda\mu}}
        {\partial x^\nu}-
        \frac{1}{2}
        \frac{\partial g_{\mu\nu}}
        {\partial x^\lambda}
    \right)
    \frac{\mathrm{d}x^{\mu}}{\mathrm{d}s}
    \frac{\mathrm{d}x^{\nu}}{\mathrm{d}s}=0
$$
となるわけだが、ここで以下のように変形する。
$$
    \left(
        \frac{\partial g_{\lambda\mu}}
        {\partial x^\nu}-
        \frac{1}{2}
        \frac{\partial g_{\mu\nu}}
        {\partial x^\lambda}
    \right)
    \frac{\mathrm{d}x^{\mu}}{\mathrm{d}s}
    \frac{\mathrm{d}x^{\nu}}{\mathrm{d}s}=
    \frac{1}{2}
    \left(
        \frac{\partial g_{\lambda\mu}}
        {\partial x^\nu}+
        \frac{\partial g_{\lambda\nu}}
        {\partial x^\mu}-
        \frac{\partial g_{\mu\nu}}
        {\partial x^\lambda}
    \right)
    \frac{\mathrm{d}x^{\mu}}{\mathrm{d}s}
    \frac{\mathrm{d}x^{\nu}}{\mathrm{d}s}
$$
そして、計量の微分を展開してみると
$$
    \frac{\partial g_{\lambda\mu}}
    {\partial x^\nu}=
    \frac{\partial}{\partial x^\nu}
    (\bm{e}_\lambda\cdot\bm{e}_\mu)=
    \frac{\partial\bm{e}_\lambda}
    {\partial x^\nu}\cdot\bm{e}_\mu+
    \bm{e}_\lambda\cdot
    \frac{\partial\bm{e}_\mu}
    {\partial x^\nu}
$$
であり、ここで**第１種クリストフェル記号**を
$$
    \Gamma_{\nu\lambda,\mu}=
    \frac{\partial\bm{e}_\lambda}
    {\partial x^\nu}\cdot\bm{e}_\mu=
    \bm{e}_\mu\cdot
    \frac{\partial\bm{e}_\lambda}
    {\partial x^\nu}
$$
というように定義することで、
$$
    \frac{\partial g_{\lambda\mu}}
    {\partial x^\nu}=
    \Gamma_{\nu\lambda,\mu}+
    \Gamma_{\nu\mu,\lambda}
$$
となる。同様に、その他の偏微分についても
$$
    \frac{\partial g_{\lambda\nu}}
    {\partial x^\mu}=
    \Gamma_{\mu\lambda,\nu}+
    \Gamma_{\mu\nu,\lambda}、
    \frac{\partial g_{\mu\nu}}
    {\partial x^\lambda}=
    \Gamma_{\lambda\mu,\nu}+
    \Gamma_{\lambda\nu,\mu}
$$
となるため、以下のような関係が成り立つことが分かる。
$$
    \Gamma_{\mu\nu,\lambda}=
    \frac{1}{2}
    \left(
        \frac{\partial g_{\lambda\mu}}
        {\partial x^\nu}+
        \frac{\partial g_{\lambda\nu}}
        {\partial x^\mu}-
        \frac{\partial g_{\mu\nu}}
        {\partial x^\lambda}
    \right)
$$

そして、元の式に $g^{k\lambda}$ をかけることにより以下の形が得られる。
$$
    \frac{\mathrm{d}^2x^k}
    {\mathrm{d}s^2}+
    g^{k\lambda}
    \Gamma_{\mu\nu,\lambda}
    \frac{\mathrm{d}x^{\mu}}{\mathrm{d}s}
    \frac{\mathrm{d}x^{\nu}}{\mathrm{d}s}=0
$$
これは**第２種クリストッフェル記号**を用いて
$$
    \Gamma^{k}_{\mu\nu}=
    g^{k\lambda}
    \Gamma_{\mu\nu,\lambda}=
    \frac{1}{2}g^{k\lambda}
    \left(
        \frac{\partial g_{\lambda\mu}}
        {\partial x^\nu}+
        \frac{\partial g_{\lambda\nu}}
        {\partial x^\mu}-
        \frac{\partial g_{\mu\nu}}
        {\partial x^\lambda}
    \right)
$$
により、次の**測地線方程式**の形で記載される。
$$
    \frac{\mathrm{d}^2x^k}
    {\mathrm{d}s^2}+
    \Gamma^{k}_{\mu\nu}
    \frac{\mathrm{d}x^{\mu}}{\mathrm{d}s}
    \frac{\mathrm{d}x^{\nu}}{\mathrm{d}s}=0
$$
この式は物体がRiemann空間内を最短距離で通るということを前提にして求められるもので、例として点Aから点Bへ物体が移動するものとすると
$$
    s=\int_A^B\mathrm{d}s=
    \int_A^B
    \frac{\mathrm{d}s}{\mathrm{d}t}
    \mathrm{d}t=
    \int_A^B
    \sqrt{g_{\mu\nu}\dot{x}^\mu\dot{x}^\nu}
    \mathrm{d}t
$$
が最小となる（$\delta s=0$）ときの関係式からも確認できる。特殊相対性理論においては、$g_{\mu\nu}=\eta_{\mu\nu}$（Lorentz変換）とするとクリストッフェル記号は0となり
$$
    \frac{\mathrm{d}^2x^k}
    {\mathrm{d}s^2}=0、
    \frac{\mathrm{d}s}{\mathrm{d}t}=
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
    \frac{\mathrm{d}s}{c}=
    \sqrt{1-\frac{\bm{v}^2}{c^2}}
    \mathrm{d}t
$$
とおくと、先程測地線方程式に $m_0c\dot{s}$ がかかっていたことを踏まえて
$$
    m_0c\dot{s}
    \frac{\mathrm{d}^2x^k}{\mathrm{d}s^2}=0
    \rightarrow
    \frac{\mathrm{d}p^k}{\mathrm{d}\tau}=0、
    \left(
        p^k=
        m_0
        \frac{\mathrm{d}x^k}
        {\mathrm{d}\tau}
    \right)
$$
というように、相対論的力学で登場した運動方程式で力を0とした式が求められることが分かる。ここでの  $p^k$ は4元運動量呼ばれており、右辺に力がある場合には $f^k$ （4元力）となる。このように、今までは速度に応じて質量が変化するものと思われてきたが、実は時間の進み方が変化していたことが分かる。


測地線方程式において、第二項目を右辺に移項し両辺に $m_0c$ をかけると $p^k=m_0cv^k$ であるため
$$
    \frac{\mathrm{d}p^k}
    {\mathrm{d}\tau}=
    -\frac{1}{m_0c}\Gamma^{k}_{\mu\nu}
    p^{\mu}p^{\nu}
$$
となるが、ここで右辺が慣性力によるものになると思われる。そこで、まずは簡単に地球上の重力を考慮して

$$
    \frac{\mathrm{d}p^3}
    {\mathrm{d}t}=
    -\frac{Gm_0M_0}{(x^3+R_0)^2}
$$