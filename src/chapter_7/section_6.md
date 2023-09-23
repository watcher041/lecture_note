
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
ここで力 $\bm{f}$ が保存力であれば、各成分ごとに
$$
     \frac{\partial\mathcal{L}}{\partial v_x}=
     p_x、
     \frac{\partial\mathcal{L}}{\partial v_y}=
     p_y、
     \frac{\partial\mathcal{L}}{\partial v_z}=
     p_z、
     \frac{\partial\mathcal{L}}{\partial v_w}=
     p_w
     
$$
$$
    \frac{\partial\mathcal{L}}{\partial x}=
     f_x、
     \frac{\partial\mathcal{L}}{\partial y}=
     f_y、
     \frac{\partial\mathcal{L}}{\partial z}=
     f_z、
     \frac{\partial\mathcal{L}}{\partial w}=
     f_w
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
    {\sqrt{1-\frac{\bm{v}^2}{c^2}}}、
     \frac{\partial\mathcal{L}}{\partial c}=
     \frac{m_0c}
    {\sqrt{1-\frac{\bm{v}^2}{c^2}}}
     
$$
$$
    \frac{\partial\mathcal{L}}{\partial x}=
     f_x、
     \frac{\partial\mathcal{L}}{\partial y}=
     f_y、
     \frac{\partial\mathcal{L}}{\partial z}=
     f_z、
     \frac{\partial\mathcal{L}}{\partial w}=
     \frac{1}{c}
     (f_xv_x+f_yv_y+f_zv_z)
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