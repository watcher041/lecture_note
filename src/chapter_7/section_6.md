
## 測地線方程式

　まず特殊相対論においての解析力学について触れると、ラグランジアン $\mathcal{L}$ を用いて運動方程式は
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
と書けたわけだが、一方で相対論的力学における運動方程式は
$$
    \frac{\mathrm{d}\bm{p}}{\mathrm{d}\tau}=
    \bm{f}、
    \bm{p}=\frac{m_0\bm{v}}
    {\sqrt{1-\frac{\bm{v}^2}{c^2}}}
$$
となっていた。ここで、各成分に対して
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
    \sqrt{\frac{\mathrm{d}s^2}{c^2}}=
    \frac{1}{c}\sqrt{
    \eta_{\mu\nu}
    \mathrm{d}x^\mu\mathrm{d}x^\nu}
    \rightarrow
    \frac{1}{c}\sqrt{
    g_{\mu\nu}
    \mathrm{d}x^\mu\mathrm{d}x^\nu}
$$
と置き換えて、改めて運動方程式を解いてみると