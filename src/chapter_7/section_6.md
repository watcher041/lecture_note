
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
    {\partial \dot{x}^\xi}=
    -m_0c
    \frac{\partial}
    {\partial \dot{x}^\xi}
    \sqrt{
    g_{\mu\nu}\dot{x}^\mu\dot{x}^\nu}=
    -\frac{m_0c}{\dot{s}}
    g_{\xi\mu}\dot{x}^{\mu}
    　(\dot{s}=\sqrt{g_{\mu\nu}\dot{x}^\mu\dot{x}^\nu})
$$
$$
    \frac{\partial\mathcal{L}}
    {\partial x^\xi}=
    -m_0c
    \frac{\partial}
    {\partial x^\xi}
    \sqrt{
    g_{\mu\nu}\dot{x}^\mu\dot{x}^\nu}=
    -\frac{m_0c}{2\dot{s}}
    \left(
        \frac{\partial g_{\mu\nu}}
        {\partial x^\xi}
        \dot{x}^\mu\dot{x}^\nu
    \right)
    　(\dot{s}=\sqrt{g_{\mu\nu}\dot{x}^\mu\dot{x}^\nu})
$$
以上の結果を方程式に代入すると以下のような形になる。
$$
    -\frac{\ddot{s}}{\dot{s}^2}
    g_{\mu\xi}\dot{x}^{\mu}+
    \frac{1}{\dot{s}}
    \frac{\partial g_{\mu\xi}}{\partial x^\nu}
    \dot{x}^\xi\dot{x}^\nu+
    \frac{1}{\dot{s}}g_{\mu\xi}\ddot{x}^{\mu}-
    \frac{1}{2\dot{s}}
    \left(
        \frac{\partial g_{\mu\nu}}
        {\partial x^\xi}
        \dot{x}^\mu\dot{x}^\nu
    \right)=0
$$