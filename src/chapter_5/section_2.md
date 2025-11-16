
## Hamilton形式

Lagrange形式より対称性を高めたもの

一般化座標への変換を含む、ある種の $q_i,Q_j$ についての変換に対して運動方程式を不変とする正準方程式がある。
$$
    q_i=q_i(Q_j,\dot{Q}_j)、
    \dot{q}_i=\dot{q}_i(Q_j,\dot{Q}_j)
$$
ただし、$(q_i,\dot{q}_i)$ に対しての変換に関する理論はない。しかし、Lagrange形式でも出た
$$
    p_i=\frac{\partial L}{\partial \dot{q}_i}
    \rightarrow
    \dot{q}_i=\frac{\partial G}{\partial \dot{p}_i}
$$
ということを行うと、Lagrange形式のものより対称性が高い正準方程式が導かれる（Legendre変換）。
$$
    G(q_i,p_i)=\sum_j \dot{q}_j p_j-L
$$
この $G$ は一般的に $H$ と表わしHamiltonianと呼ばれている。

方程式の導出方法

1. ハミルトニアンの定義とオイラーラグランジュ方程式から