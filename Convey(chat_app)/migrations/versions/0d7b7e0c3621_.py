"""empty message

Revision ID: 0d7b7e0c3621
Revises: b042d482dc5c
Create Date: 2024-08-06 16:19:10.255000

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '0d7b7e0c3621'
down_revision = 'b042d482dc5c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('accounts', schema=None) as batch_op:
        batch_op.add_column(sa.Column('bio', sa.Text(), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('accounts', schema=None) as batch_op:
        batch_op.drop_column('bio')

    # ### end Alembic commands ###