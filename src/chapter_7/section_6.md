
## 測地線方程式

　特殊相対性理論において、運動方程式は
$$
    \frac{\mathrm{d}\bm{p}}{\mathrm{d}\tau}=
    \bm{f}、
    \frac{\mathrm{d}E_K}{\mathrm{d}\tau}=
    \bm{f}\cdot\bm{v}、
    \bm{p}=
    \frac{m_0\bm{v}}
    {\sqrt{1-\frac{\bm{v}^2}{c^2}}}、
    E_K=
    \frac{m_0c^2}
    {\sqrt{1-\frac{\bm{v}^2}{c^2}}}
$$
という形で書けたわけなので、これを解析力学へ応用してみることにする。まず、解析力学において運動方程式はラグランジアン $\mathcal{L}$ と一般化座標 $q$ を用いて以下のようになっていた。
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
    \right)=
    \frac{1}{c}\sqrt{
    \eta_{\mu\nu}
    \frac{\mathrm{d}x^\mu}{\mathrm{d}t}
    \frac{\mathrm{d}x^\nu}{\mathrm{d}t}}
    \rightarrow
    \frac{1}{c}\sqrt{
    g_{\mu\nu}\dot{x}^\mu\dot{x}^\nu}
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
    -\frac{m_0c}{2}
    \left(
        \frac{\partial g_{\mu\nu}}
        {\partial x^\lambda}
        \frac{\mathrm{d}x^{\mu}}
        {\mathrm{d}s}
        \frac{\mathrm{d}x^{\nu}}
        {\mathrm{d}s}
    \right)
    \frac{\mathrm{d}s}{\mathrm{d}t}-
    \frac{\partial U}{\partial x^\lambda}
$$
となる（ここで $g_{\mu\nu}=g_{\nu\mu}$ を利用している）。
以上の結果を上記の運動方程式に代入すると以下のような形になる。
$$
    m_0c
    \frac{\mathrm{d}s}{\mathrm{d}t}
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
    m_0c
    \frac{\mathrm{d}s}{\mathrm{d}t}
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
ここでポテンシャルが $U$ がなく $\dot{s}\neq 0$ であることを踏まえると、
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
が最小となる（$\delta s=0$）ときの関係式からも確認できる。

　例として、先ほどでも出たGaliei変換、Lorentz変換でどうなるか見てみると、まずGalilei変換の場合
$$
    x'^0=x^0、
    x'^1=x^1-\beta x^0、
    x'^2=x^2、
    x'^3=x^3、
    \left(
        \beta=\frac{V}{c}
    \right)
$$
であるが、この計量を求めてみると
$$
    g_{\lambda\mu}=
    \frac{\partial\bm{x}'}
    {\partial x^\lambda}\cdot
    \frac{\partial\bm{x}'}
    {\partial x^\mu}=
    (1+\beta^2)
    \delta_{\lambda\mu}^{00}-
    \beta
    (\delta_{\lambda\mu}^{01}+
    \delta_{\lambda\mu}^{10})+
    \delta_{\lambda\mu}^{11}+
    \delta_{\lambda\mu}^{22}+
    \delta_{\lambda\mu}^{33}
$$
であり、偏微分する項目がなくクリストフェル記号の部分は0になる。そのため、測地線方程式において $s$ の二階微分しか残らないことになる。
$$
    \frac{\mathrm{d}^2x^k}
    {\mathrm{d}s^2}=0
    \rightarrow
    x^k=a^ks+b^k、
    （a^k,b^k：定数）
$$
ここで、$s$ に関して $\dot{s}=\sqrt{g_{\mu\nu}\dot{x}^\mu\dot{x}^\nu}$ であったので
$$
    \dot{s}=
    \sqrt{
    (1+\beta^2)(\dot{x}^0)^2-
    2\beta\dot{x}^0\dot{x}^1+
    (\dot{x}^1)^2+(\dot{x}^2)^2+
    (\dot{x}^3)^2}
$$
となるが、求めた式を時間微分して二乗すると
$$
    (\dot{x}^k)^2=(a^k\dot{s})^2=
    (a^k)^2
    \left[
    (1+\beta^2)(\dot{x}^0)^2-
    2\beta\dot{x}^0\dot{x}^1+
    (\dot{x}^1)^2+(\dot{x}^2)^2+
    (\dot{x}^3)^2
    \right]
$$
が成立するわけだが、$a^k\neq 0$ としても等式が成り立たないことが分かる。そのため、$\dot{x}^k=0$ であり等速度運動するという結論になる。Lorentz変換においても、これと同様の結果が導かれる。

　例として、地球表面上での運動がどのようになるか見るために極座標で書くと
$$
    x'^0=x^0、
    x'^1=r\sin\theta\cos\phi、
    x'^2=r\sin\theta\sin\phi、
    x'^3=r\cos\theta
$$
となるため、まず計量を求めてみると
