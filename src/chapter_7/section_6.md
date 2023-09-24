
## 測地線方程式

　まず特殊相対性理論において運動方程式というのは
$$
    \frac{\mathrm{d}\bm{p}}{\mathrm{d}\tau}=
    \bm{f}、
    \frac{\mathrm{d}E}{\mathrm{d}\tau}=
    \bm{f}\cdot\bm{v}、
    \bm{p}=
    \frac{m_0\bm{v}}
    {\sqrt{1-\frac{\bm{v}^2}{c^2}}}、
    E=
    \frac{m_0c^2}
    {\sqrt{1-\frac{\bm{v}^2}{c^2}}}
$$
という形で書けたわけだが、一方で解析力学においての運動方程式はラグランジアン $\mathcal{L}$ と一般化座標 $q$ を用いて以下のようになっていた。
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
ここで力 $\bm{f}$ が保存力であれば、各成分ごとに速度に関わる部分のみ記載すると
$$
     \frac{\partial\mathcal{L}}{\partial v_x}=
     p_x、
     \frac{\partial\mathcal{L}}{\partial v_y}=
     p_y、
     \frac{\partial\mathcal{L}}{\partial v_z}=
     p_z
$$
であるから、以下の関係式が成立する。
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
となることを考慮すると、
$$
    \mathcal{L}=
    -m_0c^2\sqrt{1-\frac{\bm{v}^2}{c^2}}-U
$$
であることが分かる。これは静止エネルギーがポテンシャルエネルギーの一種ともとれる。（物体内の原子、分子同士に働く相互作用によるものと考えられる）次に、先ほど登場した計量により
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
と置き換えて、改めて運動方程式を解いてみると
$$
    \frac{\partial\mathcal{L}}
    {\partial \dot{x}^\lambda}=
    -m_0c
    \frac{\partial}
    {\partial \dot{x}^\lambda}
    \sqrt{
    g_{\mu\nu}\dot{x}^\mu\dot{x}^\nu}=
    -\frac{m_0c}{\dot{s}}
    g_{\lambda\mu}\dot{x}^{\mu}
    　(\dot{s}=\sqrt{g_{\mu\nu}\dot{x}^\mu\dot{x}^\nu})
$$
$$
    \frac{\partial\mathcal{L}}
    {\partial x^\lambda}=
    -m_0c
    \frac{\partial}
    {\partial x^\lambda}
    \sqrt{
    g_{\mu\nu}\dot{x}^\mu\dot{x}^\nu}=
    -\frac{m_0c}{2\dot{s}}
    \left(
        \frac{\partial g_{\mu\nu}}
        {\partial x^\lambda}
        \dot{x}^\mu\dot{x}^\nu
    \right)
    　(\dot{s}=\sqrt{g_{\mu\nu}\dot{x}^\mu\dot{x}^\nu})
$$
以上の結果を方程式に代入すると以下のような形になる。
$$
    -\frac{\ddot{s}}{\dot{s}^2}
    g_{\mu\lambda}\dot{x}^{\mu}+
    \frac{1}{\dot{s}}
    \frac{\partial g_{\mu\lambda}}{\partial x^\nu}
    \dot{x}^\lambda\dot{x}^\nu+
    \frac{1}{\dot{s}}g_{\mu\lambda}\ddot{x}^{\mu}-
    \frac{1}{2\dot{s}}
    \left(
        \frac{\partial g_{\mu\nu}}
        {\partial x^\lambda}
        \dot{x}^\mu\dot{x}^\nu
    \right)=0
$$
$$
    g_{\mu\lambda}\ddot{x}^\mu+
    \frac{1}{2}
    \left(
        \frac{\partial g_{\mu\lambda}}
        {\partial x^\nu}+
        \frac{\partial g_{\nu\lambda}}
        {\partial x^\mu}-
        \frac{\partial g_{\mu\nu}}
        {\partial x^\lambda}
    \right)
    \dot{x}^\mu\dot{x}^\nu-
    \frac{\ddot{s}}{\dot{s}^2}
    g_{\mu\lambda}\dot{x}^{\mu}=0
$$
これに $g^{k\lambda}$ をかけ、$s$ が時間の一次関数である（$\ddot{s}=0$）であるとすると
$$
    \frac{\mathrm{d}^2 x^k}{\mathrm{d}t^2}+
    \frac{1}{2}g^{k\lambda}
    \left(
        \frac{\partial g_{\mu\lambda}}
        {\partial x^\nu}+
        \frac{\partial g_{\nu\lambda}}
        {\partial x^\mu}-
        \frac{\partial g_{\mu\nu}}
        {\partial x^\lambda}
    \right)
    \frac{\mathrm{d} x^\mu}{\mathrm{d}t}
    \frac{\mathrm{d} x^\nu}{\mathrm{d}t}=0
$$
となり、さらに**第２種クリストッフェル記号**を用いて
$$
    \Gamma^{k}_{\ \ \mu\nu}=
    \frac{1}{2}g^{k\lambda}
    \left(
        \frac{\partial g_{\mu\lambda}}
        {\partial x^\nu}+
        \frac{\partial g_{\nu\lambda}}
        {\partial x^\mu}-
        \frac{\partial g_{\mu\nu}}
        {\partial x^\lambda}
    \right)
$$
というように置くと、測地線の方程式を求めることができる。
$$
    \frac{\mathrm{d}^2 x^k}{\mathrm{d}t^2}+
    \Gamma^{k}_{\ \ \mu\nu}
    \frac{\mathrm{d} x^\mu}{\mathrm{d}t}
    \frac{\mathrm{d} x^\nu}{\mathrm{d}t}=0
$$
一方で、**第1種クリストッフェル記号**もあるわけだが、こちらは
$$
    \Gamma_{\lambda,\mu\nu}=
    \frac{1}{2}
    \left(
        \frac{\partial g_{\mu\lambda}}
        {\partial x^\nu}+
        \frac{\partial g_{\nu\lambda}}
        {\partial x^\mu}-
        \frac{\partial g_{\mu\nu}}
        {\partial x^\lambda}
    \right)
$$
というように $g^{k\lambda}$ をかける前のものとなっている。この意味については、単位ベクトルに直すとわかる。
$$
\begin{aligned}
    \Gamma_{\lambda,\mu\nu}
    &=
    \frac{1}{2}
    \left[
        \frac{\partial}{\partial x^\nu}
        (\bm{e}_\mu\cdot\bm{e}_\lambda)+
        \frac{\partial}{\partial x^\mu}
        (\bm{e}_\nu\cdot\bm{e}_\lambda)-
        \frac{\partial}{\partial x^\lambda}
        (\bm{e}_\mu\cdot\bm{e}_\nu)
    \right]\\
    &=
    \frac{1}{2}
    \left[
    \frac{\partial\bm{e}_\mu}{\partial x^\nu}
    \cdot\bm{e}_\lambda+
    \bm{e}_\mu\cdot
    \frac{\partial\bm{e}_\lambda}{\partial x^\nu}+
    \frac{\partial\bm{e}_\nu}{\partial x^\mu}
    \cdot\bm{e}_\lambda+
    \bm{e}_\nu\cdot
    \frac{\partial\bm{e}_\lambda}{\partial x^\mu}-
    \frac{\partial\bm{e}_\mu}{\partial x^\lambda}
    \cdot\bm{e}_\nu-
    \bm{e}_\mu\cdot
    \frac{\partial\bm{e}_\nu}{\partial x^\lambda}
    \right]\\
    &=
    \bm{e}_\lambda\cdot
    \frac{\partial\bm{e}_\mu}{\partial x^\nu}
\end{aligned}
$$