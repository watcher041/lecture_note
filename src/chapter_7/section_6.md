
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
であることが分かる。これを踏まえて、